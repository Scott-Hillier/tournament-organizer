import axios from "axios";
import roundRobin from "./Logic/RoundRobin";
import GroupsSchedule from "./Logic/GroupsSchedule";

export function getAllTournaments() {
  return axios.get("/tournaments/all");
}

export function getTournamentInfo(tournament_id) {
  return axios.get(`/tournaments/${tournament_id}`);
}

export function getTournamentId(tournament_name, start_date) {
  return axios.get(`/tournaments/${tournament_name}/${start_date}`);
}

export function createTournament(
  tournament_name,
  location,
  description,
  number_of_teams,
  start_date,
  end_date,
  format,
  number_of_groups
) {
  return axios.post(`/tournaments/create`, {
    tournament_name: tournament_name,
    location: location,
    description: description,
    number_of_teams: number_of_teams,
    start_date: start_date,
    end_date: end_date,
    format: format,
    number_of_groups: number_of_groups,
  });
}

export function getTournamentTeams(tournament_id) {
  return axios.get(`/teams/${tournament_id}`);
}

export function addTeam(tournament_id, team) {
  console.log("API", tournament_id, team);
  return axios.post(`/teams/${tournament_id}/add`, team);
}

export function createGroups(
  tournament_id,
  teams_array,
  number_of_groups,
  random
) {
  const teams = roundRobin(teams_array, number_of_groups, random);
  for (const team of teams) {
    axios.post(`/teams/${tournament_id}/groups`, team);
  }
  axios.post(`/tournaments/${tournament_id}/numberOfGroups`, {
    number_of_groups: number_of_groups,
  });
}

export function createSchedule(tournament_id, groups) {
  const groupMatches = [];
  groups.map((group) => {
    groupMatches.push(GroupsSchedule(group).sort(() => Math.random() - 0.5));
    console.log(group[0].group_id)
  });
  console.log(groupMatches)
}

export function createMatches(tournament_id, groups) {}
