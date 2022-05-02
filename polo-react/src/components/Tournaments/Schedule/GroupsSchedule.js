import React from "react";
import TournamentGroupMatches from "./GroupScheduleMatches";
import GroupsSchedule from "../../../helpers/Logic/GroupsSchedule";
import "../../../styles/Tournaments/Schedule/ScheduleGroups.scss";

const TournamentGroupsSchedule = ({ group }) => {
  const matches = GroupsSchedule(group).sort(() => Math.random() - 0.5);
  return (
    <section className="schedule-groups">
      Group Matches
      {matches.map((match, i) => {
        return <TournamentGroupMatches key={i} match={match} />;
      })}
    </section>
  );
};

export default TournamentGroupsSchedule;
