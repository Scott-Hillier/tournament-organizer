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
    info: { ...info, groupsCompleted: true },
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
      groupId: team.group_id,
      player1: team.player1,
      player2: team.player2,
      player3: team.player3,
      wins: 0,
      delta: 0,
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
    if (match.winner) {
      tournament.teams[match.winner].wins += 1;
    }
    if (match.team_1_score && match.team_2_score) {
      tournament.teams[match.team_1_id].delta +=
        match.team_1_score - match.team_2_score;
      tournament.teams[match.team_2_id].delta +=
        match.team_2_score - match.team_1_score;
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

export function updateMatchResults(tournament_id, results) {
  return axios.post(`/matches/${tournament_id}/updateResults`, results);
}
