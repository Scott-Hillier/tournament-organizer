const GroupsSchedule = (group) => {
  // console.log(group);
  const matchesPerTeam = group.length - 1;
  const matchesPerGroup = (group.length * group.length - group.length) / 2;
  const matchesArray = [];

  for (let i = 0; i <= matchesPerTeam; i++) {
    for (let j = i + 1; j <= matchesPerTeam; j++) {
      const match = { team1: group[i].team_name, team2: group[j].team_name };
      matchesArray.push(match);
    }
  }

  return matchesArray;
};

export default GroupsSchedule;
