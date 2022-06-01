import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  getTournamentInfo,
  getTournamentTeams,
  getTournamentSchedule,
  createMatches,
  createSchedule,
} from "../../../helpers/apiHelpers";
import splitGroups from "../../../helpers/Logic/splitGroups";
import ScheduleGroups from "./ScheduleGroups";
import "../../../styles/Tournaments/Schedule/SchedulePage.scss";

const EMPTY = "EMPTY";
const FULL = "FULL";

const Schedule = () => {
  const [tournamentState, setTournamentState] = useState({});
  const [tournamentTeamsState, setTournamentTeamsState] = useState([]);
  const [tournamentGroupState, setTournamentGroupsState] = useState([]);
  const [tournamentScheduleState, setTournamentScheduleState] = useState([]);
  const [tournamentMatchesState, setTournamentMatchesState] = useState([]);
  const [scheduleState, setScheduleState] = useState(EMPTY);

  const { tournament_id } = useParams();
  const groupsArray = [];
  const matchesArray = [];

  useEffect(() => {
    getTournamentInfo(tournament_id)
      .then((res) => {
        setTournamentState(res.data[0]);
        for (let i = 0; i < res.data[0].number_of_groups; i++) {
          groupsArray.push([]);
          matchesArray.push([]);
        }
      })
      .then(() => {
        getTournamentTeams(tournament_id).then((response) => {
          setTournamentTeamsState(response.data);
          setTournamentGroupsState(splitGroups(groupsArray, response.data));
        });
      })
      .then(() => {
        getTournamentSchedule(tournament_id).then((res) => {
          console.log(res.data);
          res.data.length > 0
            ? setScheduleState(FULL)
            : setScheduleState(EMPTY);
          setTournamentMatchesState(splitGroups(matchesArray, res.data));
        });
      });
  }, []);

  console.log(tournamentMatchesState);
  return (
    <section className="schedule-page">
      <h1>TOURNAMENT SCHEDULE</h1>
      {scheduleState === FULL && (
        <section className="tournament-page-teams">
          {tournamentMatchesState.map((group, i) => {
            return (
              <ScheduleGroups
                key={i}
                group={group}
                tournament_id={tournament_id}
              />
            );
          })}
        </section>
      )}
      {scheduleState === EMPTY && (
        <button
          onClick={(e) => {
            e.preventDefault();
            createSchedule(tournament_id, tournamentGroupState);
            window.location.reload();
          }}
        >
          Generate Schedule
        </button>
      )}
    </section>
  );
};

export default Schedule;
