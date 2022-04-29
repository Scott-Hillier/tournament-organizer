import React, { useEffect, useState } from "react";
import TournamentTeams from "./TournamentTeams";

const TournamentGroups = ({ group }) => {
  console.log(group);
  return (
    <div>
      <h1>Group</h1>
      {group.map((team) => {
        return <TournamentTeams key={team.id} team={team} />;
      })}
    </div>
  );
};

export default TournamentGroups;
