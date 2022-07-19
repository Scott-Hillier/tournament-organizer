import React from "react";
import Match from "./Match";

const GroupMatches = ({ group }) => {
  return (
    <section className="schedule-groups">
      <h2>Group Matches</h2>
      {group.map((match, i) => {
        return <Match key={i} match={match} />;
      })}
      <br />
    </section>
  );
};

export default GroupMatches;
