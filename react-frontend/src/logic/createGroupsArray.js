const createGroupsArray = (teams, number_of_groups) => {
  const groups = [];

  if (teams[1].group_id) {
    for (let i = 0; i < number_of_groups; i++) {
      groups.push([]);
    }
    teams.forEach((team) => {
      groups[team.group_id].push(team);
    });
  } else {
    groups.push([]);
    teams.forEach((team) => {
      groups[0].push(team);
    });
  }

  return groups;
};

export default createGroupsArray;
