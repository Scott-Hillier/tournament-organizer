const splitGroups = (groups, teams) => {
  for (const team of teams) {
    groups[team.group_id - 1].push(team);
  }
  console.log(groups);

  return groups;
};

export default splitGroups;
