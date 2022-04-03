import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import {
  addTeam,
  getTournamentGroups,
  getTournamentInfo,
  getTournamentTeams,
} from "../../helpers/apiHelpers";
import TournamentTeams from "./TournamentTeams";
import TournamentGroups from "./TournamentGroups";
import roundRobin from "../../helpers/Logic/RoundRobin";
import "../../styles/Tournaments/TournamentPage.scss";

const DEFAULT = "DEFAULT";
const ADD = "ADD";

const TournamentPage = () => {
  const [tournamentState, setTournamentState] = useState({});
  const [tournamentTeamsState, setTournamentTeamsState] = useState([]);
  const [newTeamState, setNewTeamState] = useState({
    teamName: "",
    player1: "",
    player2: "",
    player3: "",
  });
  const [pageState, setPageState] = useState(DEFAULT);

  const { tournament_id } = useParams();

  useEffect(() => {
    getTournamentInfo(tournament_id).then((res) => {
      setTournamentState(res.data[0]);
    });
    getTournamentTeams(tournament_id).then((res) => {
      setTournamentTeamsState(res.data);
    });
  }, []);

  const startDate = new Date(tournamentState?.start_date);
  const endDate = new Date(tournamentState?.end_date);

  return (
    <main className="tournament-page">
      <section className="tournament-page-info">
        <br />
        <h1>{tournamentState?.tournament_name}</h1>
        <br />
        <h3>{tournamentState?.location}</h3>
        <h3>{tournamentState?.description}</h3>
        <h3>{startDate.toDateString()}</h3>
        <h3>{endDate.toDateString()}</h3>
        <h3>{tournamentState?.format}</h3>
        <h3>{tournamentState?.number_of_groups}</h3>
        <br />
        <Link
          to={{
            pathname: `/tournaments/${tournamentState.id}/schedule`,
            props: { tournament_id: tournament_id },
          }}
          type={"button"}
          className="organize-button"
        >
          Schedule
        </Link>
        <br />
      </section>
      {tournamentState?.format === "Round Robin" && (
        <section className="tournament-page-teams">
          {tournamentTeamsState.map((team) => {
            return <TournamentTeams key={team.id} team={team} />;
          })}
        </section>
      )}
      {tournamentState?.format === "Swiss Rounds" && (
        <section className="tournament-page-teams">
          {tournamentTeamsState.map((team) => {
            return <TournamentTeams key={team.id} team={team} />;
          })}
        </section>
      )}
      <br />
      {pageState === DEFAULT && (
        <button
          onClick={(e) => {
            e.preventDefault();
            console.log("click");
            setPageState(ADD);
          }}
        >
          Add Team
        </button>
      )}
      {pageState === ADD && (
        <form>
          <input
            placeholder="Team Name"
            className="add-team"
            onChange={(e) => {
              console.log("newTeamState", newTeamState);
              setNewTeamState((prev) => {
                return { ...prev, teamName: e.target.value };
              });
            }}
            required
          />
          <input
            placeholder="Player 1"
            className="add-team"
            onChange={(e) => {
              setNewTeamState((prev) => {
                return { ...prev, player1: e.target.value };
              });
            }}
            required
          />
          <input
            placeholder="Player 2"
            className="add-team"
            onChange={(e) => {
              setNewTeamState((prev) => {
                return { ...prev, player2: e.target.value };
              });
            }}
            required
          />
          <input
            placeholder="Player 3"
            className="add-team"
            onChange={(e) => {
              setNewTeamState((prev) => {
                return { ...prev, player3: e.target.value };
              });
            }}
            required
          />
          <button type="Submit"></button>
        </form>
      )}
    </main>
  );
};

export default TournamentPage;
