import axios from "axios";
import createGroupRoundRobinMatches from "../logic/createGroupRoundRobinMatches";

export function getTournaments() {
  return axios.get("/tournaments/all");
}

export async function getTournament(id) {
  const info = await axios
    .get(`/tournaments/${id}`)
    .catch((e) => console.log("Oops there's an info error"));
  const teams = await axios
    .get(`/teams/${id}`)
    .catch((e) => console.log("Oops there's a teams error"));
  const matches = await axios
    .get(`/matches/${id}`)
    .catch((e) => console.log("Oops there's a matches error"));

  return formatTournament(info.data[0], teams.data, matches.data);
}

const formatTournament = (info, teams, matches) => {
  const tournament = {
    info: info,
    teams: {},
    groups: {},
    groupOrder: [],
    matches: {},
  };
  for (let i = 0; i < info.number_of_groups; i++) {
    tournament.groups[`group-${teams[i].group_id}`] = {
      id: `group-${teams[i].group_id}`,
      teamIds: [],
    };
    tournament.groupOrder.push(`group-${teams[i].group_id}`);
  }
  teams.forEach((team) => {
    tournament.teams[`${team.id}`] = {
      id: team.id,
      name: team.team_name,
      player1: team.player1,
      player2: team.player2,
      player3: team.player3,
    };
    if (tournament.groups[`group-${team.group_id}`]) {
      tournament.groups[`group-${team.group_id}`].teamIds.push(`${team.id}`);
    }
  });
  matches.forEach((match) => {
    if (!tournament.matches[`group-${match.group_id}`]) {
      tournament.matches[`group-${match.group_id}`] = [match];
    } else {
      tournament.matches[`group-${match.group_id}`].push(match);
    }
  });
  return tournament;
};

export function setGroups(tournament_id, teams) {
  return axios.post(`/teams/${tournament_id}/groups`, teams);
}

export function createSchedule(tournament_id, groups) {
  const matches = createGroupRoundRobinMatches(groups);

  return axios.post(`/matches/${tournament_id}/create`, matches);
}

export function createTournament(organize) {
  return axios.post("/tournaments/create", organize);
}

export function updateWinners(tournament_id, matches) {
  console.log(matches);
  // return axios.post(`/matches/${tournament_id}/updatewins`, matches);
}
