const roundRobin = (teams, groupsNumber, random) => {
  const grouped = [];
  let groupID = 1;
  if (random) {
    teams = teams?.sort(() => Math.random() - 0.5);
  }
  console.log(groupsNumber);
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
