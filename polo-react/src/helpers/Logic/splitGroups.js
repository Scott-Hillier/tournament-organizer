const splitGroups = (groups, teams) => {
  for (const team of teams) {
    if (!team.group_id) {
      groups.push([]);
      groups[groups.length - 1].push(team);
    } else {
      groups[team.group_id - 1].push(team);
    }
  }

  return groups;
};

export default splitGroups;
