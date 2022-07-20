import React from "react";
import Team from "./Team";

const Group = ({ group, tournament_id }) => {
  return group.map((team, i) => {
    return (
      <div className="team">
        <Team key={i} team={team} tournament_id={tournament_id} />
      </div>
    );
  });
};

export default Group;
