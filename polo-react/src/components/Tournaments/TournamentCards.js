import React from "react";
import { Link } from "react-router-dom";
import "../../styles/Tournaments/TournamentCards.scss";

const TournamentCards = ({ tournament }) => {
  const { id, tournament_name, location, description, start_date, end_date } =
    tournament;

  return (
    <Link to={`/tournaments/${id}`} type="button" className="tournament-card">
      <h1>{tournament_name}</h1>
      <h3>{location}</h3>
      <h3>{description}</h3>
      <h3>{start_date}</h3>
      <h3>{end_date}</h3>
    </Link>
  );
};

export default TournamentCards;
