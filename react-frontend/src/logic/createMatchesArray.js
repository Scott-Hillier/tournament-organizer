const createMatchesArray = (matches, number_of_groups) => {
  const groups = [];

  for (let i = 0; i < number_of_groups; i++) {
    groups.push([]);
  }
  matches.forEach((match) => {
    groups[match.group_id].push(match);
  });

  return groups;
};

export default createMatchesArray;
