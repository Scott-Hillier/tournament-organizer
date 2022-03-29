import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { createTournament, getTournamentId } from "../helpers/apiHelpers";
import "../styles/Organize/Organize.scss";

const Organize = () => {
  let navigate = useNavigate();
  const [newTournamentState, setNewTournamentState] = useState({
    name: "",
    location: "",
    description: "",
    numberOfTeams: "",
    startDate: "",
    endDate: "",
    format: "",
    numberOfGroups: "0",
  });

  return (
    <main className="organize-page">
      <form
        className="organize-form"
        onSubmit={(event) => {
          event.preventDefault();
          createTournament(
            newTournamentState.name,
            newTournamentState.location,
            newTournamentState.description,
            newTournamentState.numberOfTeams,
            newTournamentState.startDate,
            newTournamentState.endDate,
            newTournamentState.format,
            newTournamentState.numberOfGroups
          ).then(() => {
            getTournamentId(
              newTournamentState.name,
              newTournamentState.startDate
            ).then((res) => {
              navigate(`/tournaments/${res.data[0].id}`);
            });
          });
        }}
      >
        <br />
        <input
          required
          placeholder="Tournament Name"
          className="organize-field"
          onChange={(e) => {
            setNewTournamentState((prev) => {
              return { ...prev, name: e.target.value };
            });
          }}
        />
        <br />
        <input
          placeholder="Location"
          className="organize-field"
          onChange={(e) => {
            setNewTournamentState((prev) => {
              return { ...prev, location: e.target.value };
            });
          }}
          required
        />
        <br />
        <input
          placeholder="Description"
          className="organize-field"
          onChange={(e) => {
            setNewTournamentState((prev) => {
              return { ...prev, description: e.target.value };
            });
          }}
        />
        <br />
        <input
          placeholder="Number of Teams"
          type={"number"}
          className="organize-field"
          onChange={(e) => {
            setNewTournamentState((prev) => {
              return { ...prev, numberOfTeams: e.target.value };
            });
          }}
          required
        ></input>
        <br />
        <input
          placeholder="Start Date"
          type={"date"}
          className="organize-field"
          onChange={(e) => {
            setNewTournamentState((prev) => {
              return { ...prev, startDate: e.target.value };
            });
          }}
          required
        />
        <br />
        <input
          placeholder="End Date"
          type={"date"}
          className="organize-field"
          onChange={(e) => {
            setNewTournamentState((prev) => {
              return { ...prev, endDate: e.target.value };
            });
          }}
          required
        />
        <br />
        <select
          name="Format"
          className="organize-field"
          onChange={(e) => {
            setNewTournamentState((prev) => {
              return { ...prev, format: e.target.value };
            });
          }}
          required
        >
          <option value={"none"}>Select a Format</option>
          <option value={"Round Robin"}>Round Robin</option>
          <option value={"Swiss Rounds"}>Swiss Rounds</option>
        </select>
        <br />
        {newTournamentState.format === "Round Robin" && (
          <>
            <input
              placeholder="Number of Groups"
              type={"number"}
              className="organize-field"
              onChange={(e) => {
                setNewTournamentState((prev) => {
                  return { ...prev, numberOfGroups: e.target.value };
                });
              }}
              required
            />
            <br />
          </>
        )}
        <button className="organize-button">Create Tournament</button>
      </form>
    </main>
  );
};

export default Organize;
