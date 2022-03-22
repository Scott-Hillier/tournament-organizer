import axios from "axios";

export function getAllTournaments() {
  return axios.get("/tournaments/all");
}

export function getTournamentInfo(tournament_id) {
  return axios.get(`/tournaments/${tournament_id}`);
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

export function createTeam(team_name) {
  return axios.put("/api/teams/create");
}

export function updateTeamName(team_name) {
  return axios.put("/api/teams/update/name");
}
export function updateTeamRoster(old_player, new_player) {
  return axios.put("/api/teams/update/roster");
}
