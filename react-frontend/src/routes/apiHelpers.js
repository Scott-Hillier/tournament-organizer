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
  const matches = await axios
    .get(`/matches/${id}`)
    .catch((e) => console.log("Oops there's a matches error"));

  return formatTournament(info.data[0], teams.data, matches.data);
}

const formatTournament = (info, teams, matches) => {
  return { info: info, teams: teams, matches: matches };
};

export function setGroups(tournament_id, teams) {
  return axios.post(`/teams/${tournament_id}/groups`, teams);
}

export default function createSchedule(tournament_id, groupsMatches) {
  return axios.post(`/matches/${tournament_id}/create`, groupsMatches);
}
