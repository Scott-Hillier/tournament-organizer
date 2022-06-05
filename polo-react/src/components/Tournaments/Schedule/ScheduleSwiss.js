import React, { useState } from "react";

const ScheduleSwiss = ({ match }) => {
  const NONE = "NONE";
  const TEAM1 = "TEAM1";
  const TEAM2 = "TEAM2";

  const [winnerState, setWinnerState] = useState(NONE);

  return (
    <section className="swissMatch">
      <div>
        {match.team_1_name} VS {match.team_2_name}
      </div>
      <h4>WINNER</h4>
      <button>{match.team_1_name}</button>
      <button>{match.team_2_name}</button>
    </section>
  );
};

export default ScheduleSwiss;
