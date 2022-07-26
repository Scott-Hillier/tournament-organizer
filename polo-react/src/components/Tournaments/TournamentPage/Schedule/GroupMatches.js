import React from "react";
import Match from "./Match";

const GroupMatches = ({ group, format }) => {
  return (
    <section className="schedule-groups">
      {format === "Round Robin" ? (
        <h2>Group Matches</h2>
      ) : (
        <h2>Round {group[0].round_id}</h2>
      )}
      {group.map((match, i) => {
        return <Match key={i} match={match} />;
      })}
      <br />
    </section>
  );
};

export default GroupMatches;
