import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import {
  addTeam,
  getTournamentGroups,
  getTournamentInfo,
  getTournamentTeams,
  createGroups,
} from "../../helpers/apiHelpers";
import TournamentTeams from "./TournamentTeams";
import TournamentGroups from "./TournamentGroups";
import splitGroups from "../../helpers/Logic/splitGroups.js";
import "../../styles/Tournaments/TournamentPage.scss";

const DEFAULT = "DEFAULT";
const ADD = "ADD";
const GROUPS = "GROUPS";

const TournamentPage = () => {
  const [tournamentState, setTournamentState] = useState({});
  const [tournamentTeamsState, setTournamentTeamsState] = useState([]);
  const [tournamentGroupsState, setTournamentGroupsState] = useState([]);
  const [newTeamState, setNewTeamState] = useState({
    teamName: "",
    player1: "",
    player2: "",
    player3: "",
  });
  const [pageState, setPageState] = useState(DEFAULT);
  const [groupState, setGroupState] = useState({
    numberOfGroups: 0,
    random: false,
  });

  const { tournament_id } = useParams();
  const groupsArray = [];

  useEffect(() => {
    getTournamentInfo(tournament_id)
      .then((res) => {
        setTournamentState(res.data[0]);
        for (let i = 0; i < res.data[0].number_of_groups; i++) {
          groupsArray.push([]);
        }
      })
      .then(() => {
        getTournamentTeams(tournament_id).then((response) => {
          setTournamentTeamsState(response.data);
          setTournamentGroupsState(splitGroups(groupsArray, response.data));
        });
      });
  }, []);

  const startDate = new Date(tournamentState?.start_date);
  const endDate = new Date(tournamentState?.end_date);

  return (
    <main className="tournament-page">
      <section className="tournament-page-info">
        <br />
        <h1>{tournamentState?.tournament_name}</h1>
        <br />
        <h3>{tournamentState?.location}</h3>
        <h3>{tournamentState?.description}</h3>
        <h3>{startDate.toDateString()}</h3>
        <h3>{endDate.toDateString()}</h3>
        <h3>{tournamentState?.format}</h3>
        <h3>{tournamentState?.number_of_groups}</h3>
        <br />
        <Link
          to={{
            pathname: `/tournaments/${tournamentState.id}/schedule`,
            props: { tournament_id: tournament_id },
          }}
          type={"button"}
          className="organize-button"
        >
          Schedule
        </Link>
        <br />
      </section>
      {tournamentState?.format === "Round Robin" && (
        <section className="tournament-page-teams">
          {tournamentGroupsState.map((group, i) => {
            return <TournamentGroups key={i} group={group} />;
          })}
        </section>
      )}
      {tournamentState?.format === "Swiss Rounds" && (
        <section className="tournament-page-teams">
          {tournamentTeamsState.map((team) => {
            return <TournamentTeams key={team.id} team={team} />;
          })}
        </section>
      )}
      <br />
      {pageState === DEFAULT && (
        <section>
          <button
            onClick={(e) => {
              e.preventDefault();
              setPageState(ADD);
            }}
          >
            Add Team
          </button>
          <button
            onClick={(e) => {
              e.preventDefault();
              setPageState(GROUPS);
            }}
          >
            Place Teams Into Groups
          </button>
        </section>
      )}
      {pageState === ADD && (
        <form
          onSubmit={(event) => {
            event.preventDefault();
            addTeam(tournament_id, newTeamState);
            window.location.reload();
          }}
        >
          <input
            placeholder="Team Name"
            className="add-team"
            onChange={(e) => {
              setNewTeamState((prev) => {
                return { ...prev, teamName: e.target.value };
              });
            }}
            required
          />
          <input
            placeholder="Player 1"
            className="add-team"
            onChange={(e) => {
              setNewTeamState((prev) => {
                return { ...prev, player1: e.target.value };
              });
            }}
            required
          />
          <input
            placeholder="Player 2"
            className="add-team"
            onChange={(e) => {
              setNewTeamState((prev) => {
                return { ...prev, player2: e.target.value };
              });
            }}
            required
          />
          <input
            placeholder="Player 3"
            className="add-team"
            onChange={(e) => {
              setNewTeamState((prev) => {
                return { ...prev, player3: e.target.value };
              });
            }}
            required
          />
          <button type="Submit">Add Team</button>
        </form>
      )}
      {pageState === GROUPS && (
        <form
          onSubmit={(e) => {
            e.preventDefault();
            createGroups(
              tournament_id,
              tournamentTeamsState,
              groupState.numberOfGroups,
              groupState.random
            );
            window.location.reload();
          }}
        >
          <input
            placeholder="Number of Groups"
            type={"number"}
            onChange={(e) => {
              setGroupState((prev) => {
                return { ...prev, numberOfGroups: e.target.value };
              });
            }}
            required
          />
          <p>Random?</p>
          <input
            type={"checkbox"}
            onChange={(e) => {
              if (groupState.random === false) {
                setGroupState((prev) => {
                  return { ...prev, random: true };
                });
              } else {
                setGroupState((prev) => {
                  return { ...prev, random: false };
                });
              }
            }}
          ></input>
          <button>Make Groups</button>
        </form>
      )}
    </main>
  );
};

export default TournamentPage;
