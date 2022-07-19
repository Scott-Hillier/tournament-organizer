import React from "react";
import Team from "./Team";
import Group from "./Group";

const Teams = ({ teams, groups, format }) => {
  return format === "Round Robin"
    ? groups.map((group, i) => {
        return (
          <section className="groups">
            <h1>GROUP {group[0].group_id}</h1>
            <Group key={i} group={group} />
          </section>
        );
      })
    : teams.map((team, i) => {
        return (
          <section className="team">
            <Team key={i} team={team} />
          </section>
        );
      });
};

export default Teams;
