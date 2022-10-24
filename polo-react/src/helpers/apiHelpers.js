import axios from "axios";
import roundRobin from "./Logic/RoundRobin";
import GroupsSchedule from "./Logic/GroupsSchedule";
import swissSchedule from "./Logic/SwissSchedule";
import mixerRound from "./Logic/MixerRound";

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

export function getTournamentPlayers(tournament_id) {
  return axios.get(`/players/${tournament_id}`);
}

export function addTeam(tournament_id, team) {
  return axios.post(`/teams/${tournament_id}/add`, team);
}

export function removeTeam(tournament_id, team_id) {
  return axios.post(`/teams/${tournament_id}/remove`, { team_id: team_id });
}

export function makeGroups(
  tournament_id,
  teams_array,
  number_of_groups,
  random
) {
  const teams = roundRobin(teams_array, number_of_groups, random);

  axios.post(`/teams/${tournament_id}/groups`, teams);

  axios.post(`/tournaments/${tournament_id}/numberOfGroups`, {
    number_of_groups: number_of_groups,
  });
}

export function createGroupSchedule(tournament_id, groups) {
  const groupMatches = [];
  groups.map((group) => {
    groupMatches.push(GroupsSchedule(group));
  });
  for (const group of groupMatches) {
    axios.post(`/schedules/${tournament_id}/create`, group);
  }
}

export function createSwissSchedule(tournament_id, teams, roundNumber) {
  const matches = swissSchedule(teams, roundNumber);
  return axios.post(`/schedules/${tournament_id}/create/swiss`, matches);
}

export function createMixerSchedule(tournament_id, players, roundNumber) {
  const matches = mixerRound(players, roundNumber);
  return axios.post(`/schedules/${tournament_id}/create/mixer`, {
    matches: matches,
  });
}

export function getTournamentMatches(tournament_id, format) {
  return axios.get(`/schedules/${tournament_id}/${format}/matches`);
}

export function selectWinner(team_id, tournament_id, match_id) {
  return axios.post(`/schedules/${tournament_id}/winner`, {
    team_id: team_id,
    id: match_id,
  });
}

export function updateWins(tournament_id, matches) {
  return axios.post(`/schedules/${tournament_id}/updateWins`, {
    matches: matches,
  });
}

export function updateRoundNumber(tournament_id, currentRound) {
  return axios.post(`/tournaments/${tournament_id}/updateRound`, {
    currentRound: currentRound,
  });
}
