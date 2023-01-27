import axios from "axios";

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
  return formatTournament(info.data[0], teams.data);
}

const formatTournament = (info, teams) => {
  const information = info;
  const tournament = { info: information, teams: teams };
  return tournament;
};
