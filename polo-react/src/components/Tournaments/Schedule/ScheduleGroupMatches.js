import React from "react";
import "../../../styles/Tournaments/Schedule/ScheduleMatches.scss";

const ScheduleGroupMatches = ({ match }) => {
  return (
    <section className="group-match">
      <div>Match</div>
      <div>
        {match.team1} VS {match.team2}
      </div>
    </section>
  );
};

export default ScheduleGroupMatches;
