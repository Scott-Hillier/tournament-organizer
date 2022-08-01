import React from "react";

const mixerRound = (players, round) => {
  round === 1
    ? players.sort(function (a, b) {
        return 0.5 - Math.random();
      })
    : console.log("not first round");

  const teams = [];

  for (let i = 0; i < players.length / 3; i++) {
    teams.push([]);
  }

  let counter = 0;

  for (let i = 0; i < players.length; i++) {
    teams[counter].push(players[i]);
    counter++;
    counter === players.length / 3 && (counter = 0);
  }
  return teams;
};

export default mixerRound;
