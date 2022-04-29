const splitGroups = (groups, teams) => {
  for (const team of teams) {
    groups[team.group_id - 1].push(team);
  }

  return groups;
};

export default splitGroups;
