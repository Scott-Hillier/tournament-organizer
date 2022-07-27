import React from "react";
import GroupMatches from "./GroupMatches";

const Schedule = ({ schedule, teams, groups, format, tournament_id }) => {
  return schedule.map((group, i) => {
    return (
      <section className="group" key={i}>
        <GroupMatches
          group={group}
          format={format}
          tournament_id={tournament_id}
        />
      </section>
    );
  });
};

export default Schedule;
