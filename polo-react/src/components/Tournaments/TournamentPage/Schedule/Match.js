import React from "react";
import { selectWinner } from "../../../../helpers/apiHelpers";

const Match = ({ match, tournament_id }) => {
  console.log(match);
  return (
    <section className="group-match">
      <div>Match {match.match_id}</div>
      <div>
        <button
          onClick={() => {
            selectWinner(match.team_1_id, tournament_id, match.match_id);
          }}
        >
          {match.team_1_name}
        </button>
        VS
        <button>{match.team_2_name}</button>
      </div>
    </section>
  );
};

export default Match;
