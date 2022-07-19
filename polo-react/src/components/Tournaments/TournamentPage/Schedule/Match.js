import React from "react";

const Match = ({ match }) => {
  return (
    <section className="group-match">
      <div>Match {match.match_id}</div>
      <div>
        {match.team_1_name} VS {match.team_2_name}
      </div>
    </section>
  );
};

export default Match;
