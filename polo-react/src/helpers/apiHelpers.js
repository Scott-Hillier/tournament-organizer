import axios from "axios";

export function getAllTournaments() {
  return axios.get("/tournaments/all");
}

export function getTournamentInfo(tournament_id) {
  return axios.get(`/tournaments/${tournament_id}`);
}

export function searchTournaments(word) {
  console.log("HIT");
  return axios.get("/api/tournaments/search");
}

export function createTournament(user_id) {
  return axios.put("/tournament/create");
}

export function createTeam(team_name) {
  return axios.put("/api/teams/create");
}

export function updateTeamName(team_name) {
  return axios.put("/api/teams/update/name");
}
export function updateTeamRoster(old_player, new_player) {
  return axios.put("/api/teams/update/roster");
}
