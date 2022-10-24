const GroupsSchedule = (group) => {
  if (group.length % 2 !== 0) {
    group.push({ id: group.length + 1, team_name: "BYE" });
  }

  const matchesPerTeam = group.length - 1;
  const matchesArray = [];

  const group1 = group.slice(0, group.length / 2);
  const group2 = group.slice(group.length / 2);
  let counter = 1;

  for (let i = 0; i < matchesPerTeam; i++) {
    for (let j = 0; j < group2.length; j++) {
      const match = {
        match_id: counter,
        team1Name: group1[j].team_name,
        team1ID: group1[j].team_id,
        team2Name: group2[j].team_name,
        team2ID: group2[j].team_id,
        group: group[i].group_id,
      };
      matchesArray.push(match);
      counter++;
    }
    group2.push(group1[group1.length - 1]);
    group1.pop();
    group1.splice(1, 0, group2[0]);
    group2.shift();
  }

  return matchesArray;
};

export default GroupsSchedule;
