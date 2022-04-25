const roundRobin = (teams, groupsNumber, random) => {
  let groupID = 1;
  if (random) {
    teams = teams?.sort(() => Math.random() - 0.5);
  }

  for (const team of teams) {
    if (groupID > groupsNumber) {
      groupID = 1;
    }
    // console.log(team);
    team.group_id = groupID;
    groupID++;
    // grouped.push(teams.splice(0, Math.ceil(teams.length / i)));
  }

  return teams;
};

export default roundRobin;
