const RoundRobin = (teamsArray, numberOfGroups) => {
  let counter = 1;
  const newTeamsArray = [];
  for (const team of teamsArray) {
    const teamObject = { team: team, group: counter };
    newTeamsArray.push(teamObject);
    counter++;
    if (counter > numberOfGroups) {
      counter = 1;
    }
  }
  return newTeamsArray;
};

export default RoundRobin;
