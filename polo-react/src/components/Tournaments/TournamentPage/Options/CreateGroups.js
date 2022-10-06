import React, { useState } from "react";
import { makeGroups } from "../../../../helpers/apiHelpers";

const CreateGroups = ({ tournament_id, teamsState }) => {
  const [updateGroupState, setUpdateGroupState] = useState({});

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        makeGroups(
          tournament_id,
          teamsState,
          updateGroupState.numberOfGroups,
          updateGroupState.random
        );
        // window.location.reload();
      }}
    >
      <input
        placeholder="Number of Groups"
        type={"number"}
        onChange={(e) => {
          setUpdateGroupState((prev) => {
            return { ...prev, numberOfGroups: e.target.value };
          });
        }}
        required
      />
      <p>Random?</p>
      <input
        type={"checkbox"}
        onChange={(e) => {
          if (updateGroupState.random === false) {
            setUpdateGroupState((prev) => {
              return { ...prev, random: true };
            });
          } else {
            setUpdateGroupState((prev) => {
              return { ...prev, random: false };
            });
          }
        }}
      ></input>
      <button>Make Groups</button>
    </form>
  );
};

export default CreateGroups;
