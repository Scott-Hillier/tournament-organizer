const roundRobin = (teams, groupsNumber, random) => {
  let groupID = 1;

  random
    ? (teams = teams?.sort(() => Math.random() - 0.5))
    : teams?.sort((a, b) => {
        return a.id - b.id;
      });

  for (const team of teams) {
    if (groupID > groupsNumber) {
      groupID = 1;
    }
    team.group_id = groupID;
    groupID++;
  }

  return teams;
};

export default roundRobin;
