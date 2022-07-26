import React from "react";
import Match from "./Match";

const GroupMatches = ({ group, format, tournament_id }) => {
  console.log(group);
  return (
    <section className="schedule-groups">
      {format === "Round Robin" ? (
        <h2>Group {group[0].group_id}</h2>
      ) : (
        <h2>Round {group[0].round_id}</h2>
      )}
      {group.map((match, i) => {
        return <Match key={i} match={match} tournament_id={tournament_id} />;
      })}
      <br />
    </section>
  );
};

export default GroupMatches;
