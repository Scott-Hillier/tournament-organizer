import React from "react";
import GroupMatches from "./GroupMatches";
import Match from "./Match";

const Schedule = ({ schedule, teams, groups, format }) => {
  return schedule.map((group, i) => {
    return (
      <section className="groups" key={i}>
        {format === "Round Robin" && <h1>GROUP {group[0].group_id}</h1>}
        <GroupMatches group={group} format={format} />
      </section>
    );
  });
};

export default Schedule;
