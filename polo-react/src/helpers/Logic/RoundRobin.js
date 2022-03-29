const RoundRobin = (teams, groupsNumber, random) => {
  const grouped = [];
  if (random) {
    teams = teams.sort(() => Math.random() - 0.5);
  }

  for (let i = groupsNumber; i > 0; i--) {
    grouped.push(teams.splice(0, Math.ceil(teams.length / i)));
  }

  return grouped;
};

export default RoundRobin;
