import React, { useEffect, useState } from "react";
import GenerateSchedule from "../Options/GenerateSchedule";
import GroupMatches from "./GroupMatches";
import splitGroups from "../../../../helpers/Logic/splitGroups";
import swissRounds from "../../../../helpers/Logic/SwissRounds";
import { getTournamentMatches } from "../../../../helpers/apiHelpers";

const EMPTY = "EMPTY";
const FULL = "FULL";

const Schedule = ({ teams, groups, format, tournament_id, numberOfGroups }) => {
  const [schedule, setSchedule] = useState([]);
  const [scheduleGeneratedState, setScheduleGeneratedState] = useState(EMPTY);
  const emptyGroups = [];
  const round = 1;

  for (let i = 0; i < numberOfGroups; i++) {
    emptyGroups.push([]);
  }

  useEffect(() => {
    getTournamentMatches(tournament_id, format).then((res) => {
      res.data.length > 0
        ? setScheduleGeneratedState(FULL)
        : setScheduleGeneratedState(EMPTY);
      switch (format) {
        case "Round Robin":
          setSchedule(splitGroups(emptyGroups, res.data));
          break;
        case "Swiss Rounds":
          setSchedule(swissRounds(res.data, round));
          break;
      }
    });
  }, [format]);

  return (
    <div className="schedule">
      {scheduleGeneratedState === FULL &&
        schedule.map((group, i) => {
          return (
            <section className="group" key={i}>
              <GroupMatches
                group={group}
                format={format}
                tournament_id={tournament_id}
              />
            </section>
          );
        })}
      {scheduleGeneratedState === EMPTY && (
        <GenerateSchedule
          tournament_id={tournament_id}
          format={format}
          groups={groups}
        />
      )}
    </div>
  );
};

export default Schedule;
