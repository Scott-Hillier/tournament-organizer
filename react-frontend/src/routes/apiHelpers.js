import axios from "axios";

export function getTournaments() {
  return axios.get("/tournaments/all");
}
