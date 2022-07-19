import React from "react";
import Team from "./Team";

const Group = ({ group }) => {
  return group.map((team, i) => {
    return (
      <div className="team">
        <Team key={i} team={team} />
      </div>
    );
  });
};

export default Group;
