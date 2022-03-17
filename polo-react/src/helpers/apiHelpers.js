import axios from "axios";

export function getAllTournaments() {
  console.log("getAllTournaments");
  return axios.get("/tournaments/all");
}

export function searchTournaments(word) {
  return axios.get("/api/tournaments/search");
}

export function createTournament(user_id) {
  return axios.put("/api/tournament/create");
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
