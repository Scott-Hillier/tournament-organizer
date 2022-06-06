import React, { useState } from "react";
import { selectWinner } from "../../../helpers/apiHelpers";
import "../../../styles/Tournaments/Schedule/ScheduleSwiss.scss";
const ScheduleSwissMatches = ({ match, tournament_id }) => {
  const [winnerState, setWinnerState] = useState(match.winner);

  return (
    <section className="swiss-match">
      <div>
        {match.team_1_name} VS {match.team_2_name}
      </div>
      <h4>WINNER</h4>
      <div>
        <button
          className={`winner-button${
            winnerState === match.team_1_id && `-clicked`
          }`}
          onClick={(event) => {
            event.preventDefault();
            setWinnerState(match.team_1_id);
            selectWinner(match.team_1_id, tournament_id, match.match_id);
          }}
        >
          {match.team_1_name}
        </button>
        <button
          className={`winner-button${
            winnerState === match.team_2_id ? `-clicked` : ``
          }`}
          onClick={(event) => {
            event.preventDefault();
            setWinnerState(match.team_2_id);
            selectWinner(match.team_2_id, tournament_id, match.match_id);
          }}
        >
          {match.team_2_name}
        </button>
      </div>
    </section>
  );
};

export default ScheduleSwissMatches;
