import { useEffect, useState } from "react";
import { getAllTournaments } from "../../helpers/apiHelpers";
import TournamentCards from "./TournamentCards";
import "../../styles/Tournaments/Tournaments.scss";

const TournamentPage = () => {
  return (
    <main className="tournaments-page">
      <h1>INDIVIDUAL TOURNAMENTS GO HERE</h1>
    </main>
  );
};

export default TournamentPage;
