import React from "react";
import ScheduleGroupMatches from "./ScheduleGroupMatches";
import GroupsSchedule from "../../../helpers/Logic/GroupsSchedule";
import "../../../styles/Tournaments/Schedule/ScheduleGroups.scss";

const ScheduleGroup = ({ group }) => {
  return (
    <section className="schedule-groups">
      <h2>Group Matches</h2>
      {group.map((match, i) => {
        return <ScheduleGroupMatches key={i} match={match} />;
      })}
      <br />
      <button onClick={() => {}}>Randomize Matches</button>
    </section>
  );
};

export default ScheduleGroup;
