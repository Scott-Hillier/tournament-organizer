import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import {
  getTournamentInfo,
  getTournamentTeams,
} from "../../helpers/apiHelpers";
import TournamentTeams from "./TournamentTeams";
import TournamentGroups from "./TournamentGroups";
import RoundRobin from "../../helpers/Logic/RoundRobin";
import "../../styles/Tournaments/TournamentPage.scss";

const TournamentPage = () => {
  const [tournamentState, setTournamentState] = useState({});
  const { tournament_id } = useParams();

  useEffect(() => {
    getTournamentInfo(tournament_id).then((res) => {
      setTournamentState(res.data[0]);
    });
    getTournamentTeams(tournament_id).then((res) => {
      setTournamentState((prev) => {
        return { ...prev, teams: res.data };
      });
    });
  }, []);

  const startDate = new Date(tournamentState?.start_date);
  const endDate = new Date(tournamentState?.end_date);
  const teamsArray = tournamentState?.teams || [];
  const groupsArray = RoundRobin(
    teamsArray,
    tournamentState?.number_of_groups,
    true
  );

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
        <section>
          {groupsArray.map((group, i) => {
            console.log(".map", group);
            return <TournamentGroups key={i} group={group} />;
          })}
        </section>
      )}
      {tournamentState?.format === "Swiss Rounds" && (
        <section className="tournament-page-teams">
          {teamsArray.map((team) => {
            return <TournamentTeams key={team.id} team={team} />;
          })}
        </section>
      )}
      <br />
    </main>
  );
};

export default TournamentPage;
