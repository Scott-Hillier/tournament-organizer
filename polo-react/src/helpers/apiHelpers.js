import axios from "axios";

export function getAllTournaments() {
  console.log("HIT");
  // return axios.get("api/tournaments");
}

export function searchTournaments(word) {
  return axios.get("api/tournaments/search");
}

export function createTournament(user_id) {
  return axios.put("api/tournament/create");
}

export function createTeam(team_name) {
  return axios.put("api/teams/create");
}
