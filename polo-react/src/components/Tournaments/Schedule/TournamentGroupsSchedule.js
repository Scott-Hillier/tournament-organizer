import React from "react";
import TournamentGroupMatches from "./TournamentGroupMatches";
import GroupsSchedule from "../../../helpers/Logic/GroupsSchedule";

const TournamentGroupsSchedule = ({ group }) => {
  const matches = GroupsSchedule(group).sort(() => Math.random() - 0.5);
  return (
    <section className="group-matches">
      Group Matches
      {matches.map((match, i) => {
        return <TournamentGroupMatches key={i} match={match} />;
      })}
    </section>
  );
};

export default TournamentGroupsSchedule;
