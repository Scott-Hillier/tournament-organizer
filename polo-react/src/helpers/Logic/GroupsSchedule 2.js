const GroupsSchedule = (group) => {
  const matchesPerTeam = group.length - 1;
  const matches = [];

  for (let i = 0; i <= matchesPerTeam; i++) {
    for (let j = i + 1; j <= matchesPerTeam; j++) {
      const match = {
        group_id: group[0].group_id,
        team_1: group[i].team_name,
        team_2: group[j].team_name,
      };
      matches.push(match);
    }
  }

  return matches;
};

export default GroupsSchedule;
