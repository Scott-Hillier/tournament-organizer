import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  getTournamentInfo,
  getTournamentTeams,
  getTournamentSchedule,
  createGroupSchedule,
  createSwissSchedule,
  updateWins,
  updateRoundNumber,
} from "../../../helpers/apiHelpers";
import swissRounds from "../../../helpers/Logic/SwissRounds";
import splitGroups from "../../../helpers/Logic/splitGroups";
import ScheduleGroups from "./ScheduleGroups";
import ScheduleSwissRounds from "./ScheduleSwissRounds";
import ScheduleSwissMatches from "./ScheduleSwissMatches";
import "../../../styles/Tournaments/Schedule/SchedulePage.scss";

const EMPTY = "EMPTY";
const FULL = "FULL";
const SAVE = "SAVE";
const GENERATE = "GENERATE";

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
  const [saveRoundState, setSaveRoundState] = useState(SAVE);

  const { tournament_id } = useParams();
  const groupsArray = [];
  const roundsArray = [];
  let format = "";
  let round = 0;

  useEffect(() => {
    getTournamentInfo(tournament_id)
      .then((res) => {
        setTournamentState(res.data[0]);
        for (let i = 0; i < res.data[0].number_of_groups; i++) {
          groupsArray.push([]);
        }
        for (let i = 0; i < res.data[0].round_number; i++) {
          roundsArray.push([]);
        }
        format = res.data[0].format;
        round = res.data[0].round_number;
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
          setTournamentGroupMatchesState(splitGroups(groupsArray, res.data));
          setTournamentSwissMatchesState(swissRounds(res.data, round));
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
        <>
          <section className="tournament-page-teams">
            {tournamentSwissMatchesState.map((round, i) => {
              return (
                <ScheduleSwissRounds
                  key={i}
                  round={round}
                  tournament_id={tournament_id}
                />
              );
            })}
          </section>
          <br />

          <button
            onClick={(event) => {
              console.log("hit1");
              updateWins(tournament_id, tournamentSwissMatchesState);
              updateRoundNumber(tournament_id, tournamentState.round_number);
            }}
          >
            Generate Next Round
          </button>

          {saveRoundState === GENERATE && (
            <button
              onClick={(event) => {
                console.log("hit1");
                updateWins(
                  tournament_id,
                  tournamentSwissMatchesState[tournamentState.round_number - 1]
                );
                updateRoundNumber(tournament_id, tournamentState.round_number);
              }}
            >
              Generate Next Round
            </button>
          )}
        </>
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
