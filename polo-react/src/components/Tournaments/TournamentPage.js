import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import {
  addTeam,
  removeTeam,
  getTournamentInfo,
  getTournamentTeams,
  getTournamentPlayers,
  // createGroups,
  getTournamentSchedule,
  createGroupSchedule,
  createSwissSchedule,
  createMixerSchedule,
} from "../../helpers/apiHelpers";
import Information from "./TournamentPage/Information";
import Teams from "./TournamentPage/Teams/Teams";
import AddTeam from "./TournamentPage/Options/AddTeam";
import CreateGroups from "./TournamentPage/Options/CreateGroups";
import Schedule from "./TournamentPage/Schedule/Schedule";
import swissRounds from "../../helpers/Logic/SwissRounds";
import splitGroups from "../../helpers/Logic/splitGroups.js";
import mixerRound from "../../helpers/Logic/MixerRound";

import "../../styles/Tournaments/TournamentPage.scss";

const DEFAULT = "DEFAULT";
const ADD = "ADD";
const GROUPS = "GROUPS";
const EMPTY = "EMPTY";
const FULL = "FULL";
const SAVE = "SAVE";
const GENERATE = "GENERATE";

const TournamentPage = () => {
  const [tournamentState, setTournamentState] = useState({});
  const [playersState, setPlayersState] = useState([]);
  const [teamsState, setTeamsState] = useState([]);
  const [groupsState, setGroupsState] = useState([]);
  const [newTeamState, setNewTeamState] = useState({
    teamName: "",
    player1: "",
    player2: "",
    player3: "",
  });
  const [pageState, setPageState] = useState(DEFAULT);
  const [updateGroupState, setUpdateGroupState] = useState({
    numberOfGroups: 0,
    random: false,
  });
  const [scheduleState, setScheduleState] = useState([]);
  const [scheduleGeneratedState, setScheduleGeneratedState] = useState(EMPTY);

  const { tournament_id } = useParams();
  const teamGroupsArray = [];
  const scheduleGroupsArray = [];
  const roundsArray = [];
  let format = "";
  let round = 0;

  useEffect(() => {
    getTournamentInfo(tournament_id)
      .then((res) => {
        setTournamentState(res.data[0]);
        for (let i = 0; i < res.data[0].number_of_groups; i++) {
          teamGroupsArray.push([]);
          scheduleGroupsArray.push([]);
        }
        for (let i = 0; i < res.data[0].round_number; i++) {
          roundsArray.push([]);
        }
        format = res.data[0].format;
        round = res.data[0].round_number;
      })
      .then(() => {
        getTournamentTeams(tournament_id).then((res) => {
          setTeamsState(res.data);
          setGroupsState(splitGroups(teamGroupsArray, res.data));
        });
        getTournamentPlayers(tournament_id).then((res) => {
          setPlayersState(res.data);
        });
        getTournamentSchedule(tournament_id, format).then((res) => {
          res.data.length > 0
            ? setScheduleGeneratedState(FULL)
            : setScheduleGeneratedState(EMPTY);
          switch (format) {
            case "Round Robin":
              setScheduleState(splitGroups(scheduleGroupsArray, res.data));
              break;
            case "Swiss Rounds":
              setScheduleState(swissRounds(res.data, round));
              break;
            case "Mixer":
              getTournamentPlayers(tournament_id).then((res) => {
                setScheduleState(res.data);
              });
          }
        });
      });
  }, []);

  return (
    <main className="tournament-page">
      <section className="information">
        <Information tournament={tournamentState} />
        <br />
      </section>
      <section className="teams">
        <h1>Teams</h1>
        <Teams
          teams={teamsState}
          groups={groupsState}
          format={tournamentState.format}
          tournament_id={tournament_id}
        />
      </section>
      {scheduleGeneratedState === FULL && (
        <>
          <h1>Schedule</h1>
          <section className="schedule">
            <Schedule
              schedule={scheduleState}
              teams={teamsState}
              groups={groupsState}
              format={tournamentState.format}
              tournament_id={tournament_id}
            />
          </section>
        </>
      )}
      {scheduleGeneratedState === EMPTY && (
        <section>
          <button
            onClick={(e) => {
              e.preventDefault();
              setPageState(ADD);
            }}
          >
            Add Team
          </button>
          {tournamentState.format === "Round Robin" && (
            <button
              onClick={(e) => {
                e.preventDefault();
                setPageState(GROUPS);
              }}
            >
              Place Teams Into Groups
            </button>
          )}
          <button
            onClick={(e) => {
              e.preventDefault();
              switch (tournamentState.format) {
                case "Round Robin":
                  createGroupSchedule(tournament_id, groupsState);
                  break;
                case "Swiss Rounds":
                  createSwissSchedule(
                    tournament_id,
                    teamsState,
                    tournamentState.round_number
                  );
                  break;
                case "Mixer":
                  console.log("createMixerSchedule");
                  createMixerSchedule(
                    tournament_id,
                    playersState,
                    tournamentState.round_number
                  );
              }
              window.location.reload();
            }}
          >
            Generate Schedule
          </button>
        </section>
      )}
      <br />
      {pageState === ADD && (
        <AddTeam
          tournament_id={tournament_id}
          newTeamState={newTeamState}
          setNewTeamState={setNewTeamState}
          addTeam={addTeam}
          format={tournamentState.format}
          numberOfGroups={tournamentState.number_of_groups}
        />
      )}
      {pageState === GROUPS && (
        <CreateGroups tournament_id={tournament_id} teamsState={teamsState} />
      )}
    </main>
  );
};

export default TournamentPage;
