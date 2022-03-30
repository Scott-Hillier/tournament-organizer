import React, { useEffect, useState } from "react";
import roundRobin from "../../helpers/Logic/RoundRobin";

const TournamentGroups = ({ tournament, teams }) => {
  const [groupsState, setGroupsState] = useState([]);

  console.log("hi", teams);

  useEffect(() => {
    setGroupsState(roundRobin(teams, tournament.number_of_groups, true));
  }, []);

  console.log("TITS", groupsState);

  return (
    <div>
      {groupsState.map((group, i) => {
        {
          console.log("GREE", group[0]?.team_name);
        }
        return <h1> {group[0]?.team_name}</h1>;
      })}
    </div>
  );
};

export default TournamentGroups;
