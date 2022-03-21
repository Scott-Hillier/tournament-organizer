import React from "react";
import { Link } from "react-router-dom";
import "../../styles/Tournaments/TournamentCards.scss";

const TournamentCards = ({ tournament }) => {
  const { id, tournament_name, location, description, start_date, end_date } =
    tournament;

  const startDate = new Date(start_date);
  const endDate = new Date(end_date);

  return (
    <Link to={`/tournaments/${id}`} type="button" className="tournament-card">
      <h1>{tournament_name}</h1>
      <h3>{location}</h3>
      <h3>{description}</h3>
      <h3>{startDate.toDateString()}</h3>
      <h3>{endDate.toDateString()}</h3>
    </Link>
  );
};

export default TournamentCards;
