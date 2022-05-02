import React, { useEffect, useState } from "react";
import TournamentTeams from "./TournamentTeams";
import "../../styles/Tournaments/TournamentGroups.scss";

const TournamentGroups = ({ group }) => {
  return (
    <div className="groups">
      <h1>Group {group[0].group_id}</h1>
      <div className="group">
        {group.map((team) => {
          return <TournamentTeams key={team.id} team={team} />;
        })}
      </div>
    </div>
  );
};

export default TournamentGroups;
