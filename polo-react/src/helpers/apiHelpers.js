import axios from "axios";

export function getAllTournaments() {
  console.log("HIT");
  // return axios.get("api/tournaments");
}

export function searchTournaments(word) {
  return axios.get("api/tournaments/search");
}
