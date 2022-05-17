const GroupsSchedule = (group) => {
  const matchesPerTeam = group.length - 1;
  const matchesArray = [];

  for (let i = 0; i <= matchesPerTeam; i++) {
    for (let j = i + 1; j <= matchesPerTeam; j++) {
      const match = {
        team1Name: group[i].team_name,
        team1ID: group[i].team_id,
        team2Name: group[j].team_name,
        team2ID: group[j].team_id,
        group: group[i].group_id,
      };
      matchesArray.push(match);
    }
  }

  return matchesArray;
};

export default GroupsSchedule;
