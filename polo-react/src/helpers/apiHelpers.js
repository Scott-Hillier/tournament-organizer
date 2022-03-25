import axios from "axios";

export function getAllTournaments() {
  return axios.get("/tournaments/all");
}

export function getTournamentInfo(tournament_id) {
  return axios.get(`/tournaments/${tournament_id}`);
}

export function getTournamentId(tournament_name, start_date) {
  console.log("APIHELPER:", tournament_name, start_date);
  return axios.get(`/tournaments/${tournament_name}/${start_date}`);
}

export function createTournament(
  tournament_name,
  location,
  description,
  number_of_teams,
  start_date,
  end_date
) {
  return axios.post(`/tournaments/create`, {
    tournament_name: tournament_name,
    location: location,
    description: description,
    number_of_teams: number_of_teams,
    start_date: start_date,
    end_date: end_date,
  });
}

export function getTournamentTeams(tournament_id) {
  return axios.get(`/teams/${tournament_id}`);
}
