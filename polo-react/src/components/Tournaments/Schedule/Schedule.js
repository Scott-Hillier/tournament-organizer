import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  getTournamentInfo,
  getTournamentTeams,
  getTournamentSchedule,
  createGroupSchedule,
  createSwissSchedule,
} from "../../../helpers/apiHelpers";
import splitGroups from "../../../helpers/Logic/splitGroups";
import ScheduleGroups from "./ScheduleGroups";
import ScheduleSwiss from "./ScheduleSwiss";
import "../../../styles/Tournaments/Schedule/SchedulePage.scss";

const EMPTY = "EMPTY";
const FULL = "FULL";

const Schedule = () => {
  const [tournamentState, setTournamentState] = useState({});
  const [tournamentTeamsState, setTournamentTeamsState] = useState([]);
  const [tournamentGroupState, setTournamentGroupsState] = useState([]);
  const [tournamentScheduleState, setTournamentScheduleState] = useState([]);
  const [tournamentGroupMatchesState, setTournamentGroupMatchesState] =
    useState([]);
  const [tournamentSwissMatchesState, setTournamentSwissMatchesState] =
    useState([]);
  const [scheduleState, setScheduleState] = useState(EMPTY);

  const { tournament_id } = useParams();
  const groupsArray = [];
  const matchesArray = [];
  let format = "";

  useEffect(() => {
    getTournamentInfo(tournament_id)
      .then((res) => {
        setTournamentState(res.data[0]);
        for (let i = 0; i < res.data[0].number_of_groups; i++) {
          groupsArray.push([]);
          matchesArray.push([]);
        }
        format = res.data[0].format;
      })
      .then(() => {
        getTournamentTeams(tournament_id).then((response) => {
          setTournamentTeamsState(response.data);
          setTournamentGroupsState(splitGroups(groupsArray, response.data));
        });
      })
      .then(() => {
        getTournamentSchedule(tournament_id, format).then((res) => {
          res.data.length > 0
            ? setScheduleState(FULL)
            : setScheduleState(EMPTY);

          setTournamentGroupMatchesState(splitGroups(matchesArray, res.data));
          setTournamentSwissMatchesState(res.data);
        });
      });
  }, []);

  return (
    <section className="schedule-page">
      <h1>TOURNAMENT SCHEDULE</h1>
      {scheduleState === FULL && tournamentState.format === "Round Robin" && (
        <section className="tournament-page-teams">
          {tournamentGroupMatchesState.map((group, i) => {
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
      {scheduleState === FULL && tournamentState.format === "Swiss Rounds" && (
        <section className="tournament-page-teams">
          {tournamentSwissMatchesState.map((match, i) => {
            console.log(match);
            return (
              <ScheduleSwiss
                key={i}
                match={match}
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
            tournamentState.format === "Round Robin"
              ? createGroupSchedule(tournament_id, tournamentGroupState)
              : createSwissSchedule(
                  tournament_id,
                  tournamentTeamsState,
                  tournamentState.round_number
                );
            // window.location.reload();
          }}
        >
          Generate Schedule
        </button>
      )}
    </section>
  );
};

export default Schedule;
