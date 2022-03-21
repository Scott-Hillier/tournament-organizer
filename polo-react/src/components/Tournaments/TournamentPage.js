import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getTournamentInfo } from "../../helpers/apiHelpers";

const TournamentPage = () => {
  const [tournamentState, setTournamentState] = useState();
  const { tournament_id } = useParams();

  useEffect(() => {
    getTournamentInfo(tournament_id).then((res) => {
      for (const tournament in res.data) {
        setTournamentState(res.data[tournament]);
      }
    });
  }, []);

  console.log(tournamentState);

  return (
    <main className="tournaments-page">
      <h1>{tournamentState.tournament_name}</h1>
      <h3>{tournamentState.location}</h3>
      <h3>{tournamentState.description}</h3>
      <h3>{tournamentState.start_date}</h3>
      <h3>{tournamentState.end_date}</h3>
    </main>
  );
};

export default TournamentPage;
