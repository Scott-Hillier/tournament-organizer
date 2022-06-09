const swissRounds = (matches, roundNumber) => {
  const matchesArray = [];

  for (let i = 0; i < roundNumber; i++) {
    matchesArray.push([]);
  }

  matches.map((match) => {
    matchesArray[match.round_id - 1].push(match);
  });

  console.log(matchesArray);

  return matchesArray;
};

export default swissRounds;
