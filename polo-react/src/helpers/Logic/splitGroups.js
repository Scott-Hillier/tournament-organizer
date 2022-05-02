const splitGroups = (groups, teams) => {
  console.log(teams);
  console.log(groups);
  for (const team of teams) {
    if (team.group_id === 0) {
      groups.push([]);
      groups[groups.length - 1].push(team);
    } else {
      groups[team.group_id - 1].push(team);
    }
  }

  return groups;
};

export default splitGroups;
