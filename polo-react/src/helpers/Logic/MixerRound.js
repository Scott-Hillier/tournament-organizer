import React from "react";

const mixerRound = (players, round) => {
  console.log(players);
  round === 1
    ? players.sort(function (a, b) {
        return 0.5 - Math.random();
      })
    : console.log("not first round");

  const teams = [];
  const matches = [];

  for (let i = 0; i < players.length / 3; i++) {
    teams.push([]);
  }
  for (let i = 0; i < players.length / 6; i++) {
    matches.push([]);
  }

  let counter = 0;

  for (let i = 0; i < players.length; i++) {
    teams[counter].push(players[i]);
    counter++;
    counter === players.length / 3 && (counter = 0);
  }
  counter = 0;
  for (let i = 0; i < teams.length; i++) {
    matches[counter].push(teams[i]);
    counter++;
    counter === teams.length / 2 && (counter = 0);
  }

  console.log("return", matches);
  return matches;
};

export default mixerRound;
