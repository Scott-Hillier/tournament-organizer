import React from "react";
import Team from "./Team";

const Group = ({ group }) => {
  return group.map((team) => {
    return (
      <div className="team">
        <Team key={team.id} team={team} />
      </div>
    );
  });
};

export default Group;
