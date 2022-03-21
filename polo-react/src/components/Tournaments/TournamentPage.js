import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getTournamentInfo } from "../../helpers/apiHelpers";
import "../../styles/Tournaments/TournamentPage.scss";

const TournamentPage = () => {
  const [tournamentState, setTournamentState] = useState();
  const { tournament_id } = useParams();

  useEffect(() => {
    getTournamentInfo(tournament_id).then((res) => {
      setTournamentState(res.data[0]);
    });
  }, []);

  const startDate = new Date(tournamentState?.start_date);
  const endDate = new Date(tournamentState?.end_date);

  return (
    <main className="tournament-page">
      <br />
      <h1>{tournamentState?.tournament_name}</h1>
      <br />
      <h3>{tournamentState?.location}</h3>
      <h3>{tournamentState?.description}</h3>
      <h3>{startDate.toDateString()}</h3>
      <h3>{endDate.toDateString()}</h3>
    </main>
  );
};

export default TournamentPage;
