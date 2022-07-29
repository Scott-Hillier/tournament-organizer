import React from "react";

const NewMixerRound = (players, round) => {
  round === 0
    ? players.sort(function (a, b) {
        return 0.5 - Math.random();
      })
    : console.log("not first round");

  const teams = [];

  for (let i = 0; i < players.length / 3; i++) {
    teams.push([]);
  }
  for (let i = 0; i < players.length; i++) {
    for (let j = 0; j < players.length / 3; j++) {
      teams[j].push(players[i]);
    }
  }
  return teams;
};

export default NewMixerRound;
