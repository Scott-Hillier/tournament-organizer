import React from "react";
import Team from "./Team";

const Group = ({ group }) => {
  return group.map((team) => {
    return <Team key={team.id} team={team} />;
  });
};

export default Group;
