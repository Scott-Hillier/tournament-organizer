import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  getTournamentInfo,
  getTournamentTeams,
} from "../../helpers/apiHelpers";
import TournamentTeams from "./TournamentTeams";
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
  const teams = tournamentState?.teams || [];

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
        <br />
      </section>
      <section className="tournament-page-teams">
        {teams.map((team) => {
          return <TournamentTeams key={team.id} team={team} />;
        })}
      </section>
    </main>
  );
};

export default TournamentPage;
