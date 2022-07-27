import React from "react";
import { selectWinner } from "../../../../helpers/apiHelpers";
import "../../../../styles/Tournaments/Schedule/Match.scss";

const Match = ({ match, tournament_id }) => {
  return (
    <section className="match">
      <div>Match {match.match_id}</div>
      <div className="teams">
        <button
          className={`team ${match.winner === match.team_1_id ? `winner` : ``}`}
          onClick={() => {
            selectWinner(match.team_1_id, tournament_id, match.match_id);
          }}
        >
          {match.team_1_name}
        </button>
        VS
        <button
          className={`team ${match.winner === match.team_2_id ? `winner` : ``}`}
          onClick={() => {
            selectWinner(match.team_2_id, tournament_id, match.match_id);
          }}
        >
          {match.team_2_name}
        </button>
      </div>
    </section>
  );
};

export default Match;
