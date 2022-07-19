import React from "react";
import Team from "./Team";
import Group from "./Group";

const Teams = ({ teams, groups, format }) => {
  return format === "Round Robin"
    ? groups.map((group) => {
        return (
          <section className="groups">
            <h1>GROUP {group[0].group_id}</h1>
            <Group key={group[0].group_id} group={group} />
          </section>
        );
      })
    : teams.map((team) => {
        return (
          <section className="team">
            <Team key={team.id} team={team} />
          </section>
        );
      });
};

export default Teams;
