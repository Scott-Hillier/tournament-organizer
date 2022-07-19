import React from "react";
import Team from "./Team";
import Group from "./Group";

const Teams = ({ teams, groups, format }) => {
  return format === "Round Robin"
    ? groups.map((group) => {
        return <Group key={group.id} group={group} />;
      })
    : teams.map((team) => {
        return <Team key={team.id} team={team} />;
      });
};

export default Teams;
