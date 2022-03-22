import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { createTournament } from "../helpers/apiHelpers";
import "../styles/Organize/Organize.scss";

const Organize = () => {
  let navigate = useNavigate();
  const [newTournamentState, setNewTournamentState] = useState({
    name: "",
    location: "",
    description: "",
    numberOfTeams: 0,
    startDate: "",
    endDate: "",
  });

  return (
    <main className="organize-page">
      <form className="organize-form">
        <br />
        <input
          placeholder="Tournament Name"
          className="organize-field"
          onChange={(e) => {
            setNewTournamentState((prev) => {
              return { ...prev, name: e.target.value };
            });
          }}
        ></input>
        <br />
        <input
          placeholder="Location"
          className="organize-field"
          onChange={(e) => {
            setNewTournamentState((prev) => {
              return { ...prev, location: e.target.value };
            });
          }}
        ></input>
        <br />
        <input
          placeholder="Description"
          className="organize-field"
          onChange={(e) => {
            setNewTournamentState((prev) => {
              return { ...prev, description: e.target.value };
            });
          }}
        ></input>
        <br />
        <input
          placeholder="Number of Teams"
          className="organize-field"
          onChange={(e) => {
            setNewTournamentState((prev) => {
              return { ...prev, numberOfTeams: e.target.value };
            });
          }}
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
        ></input>
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
        ></input>
        <br />
        <button
          className="organize-button"
          onClick={(e) => {
            e.preventDefault();
            createTournament(
              newTournamentState.name,
              newTournamentState.location,
              newTournamentState.description,
              newTournamentState.numberOfTeams,
              newTournamentState.startDate,
              newTournamentState.endDate
            ).then((res) => {
              console.log("res", res);
              // navigate(`/planning/general/edit/${res.data.trip_id}`);
            });
          }}
        >
          Create Tournament
        </button>
      </form>
    </main>
  );
};

export default Organize;
