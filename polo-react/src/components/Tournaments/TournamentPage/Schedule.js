import React from "react";
import GroupMatches from "./GroupMatches";
import Match from "./Match";

const Schedule = ({ schedule, teams, groups, format }) => {
  return format === "Round Robin"
    ? schedule.map((group, i) => {
        return (
          <section className="groups">
            <h1>GROUP {group[0].group_id}</h1>
            <GroupMatches key={i} group={group} />
          </section>
        );
      })
    : schedule.map((match, i) => {
        return (
          <section className="team">
            <Match key={i} match={match} />
          </section>
        );
      });
};

export default Schedule;
