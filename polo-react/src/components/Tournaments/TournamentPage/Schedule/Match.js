import React, { useEffect, useState } from "react";
import { selectWinner } from "../../../../helpers/apiHelpers";

const Match = ({ match, tournament_id }) => {
  const [winnerState, setWinnerState] = useState(match.winner);

  return (
    <section className="match">
      <div>Match {match.match_id}</div>
      <div className="match-teams">
        <button
          className={`match-team ${
            winnerState === match.team_1_id ? `winner` : ``
          }`}
          onClick={() => {
            selectWinner(match.team_1_id, tournament_id, match.id);
            setWinnerState(match.team_1_id);
          }}
        >
          {match.team_1_name}
        </button>
        VS
        <button
          className={`match-team ${
            winnerState === match.team_2_id ? `winner` : ``
          }`}
          onClick={() => {
            selectWinner(match.team_2_id, tournament_id, match.id);
            setWinnerState(match.team_2_id);
          }}
        >
          {match.team_2_name}
        </button>
      </div>
    </section>
  );
};

export default Match;
