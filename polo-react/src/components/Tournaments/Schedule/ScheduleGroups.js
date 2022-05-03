import React from "react";
import TournamentGroupMatches from "./ScheduleMatches";
import GroupsSchedule from "../../../helpers/Logic/GroupsSchedule";
import "../../../styles/Tournaments/Schedule/ScheduleGroups.scss";

const TournamentGroupsSchedule = ({ group }) => {
  const matches = GroupsSchedule(group).sort(() => Math.random() - 0.5);
  return (
    <section className="schedule-groups">
      <h2>Group Matches</h2>
      {matches.map((match, i) => {
        return <TournamentGroupMatches key={i} match={match} />;
      })}
      <br />
      <button onClick={() => {}}>Randomize Matches</button>
    </section>
  );
};

export default TournamentGroupsSchedule;