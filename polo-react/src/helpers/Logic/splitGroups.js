const splitGroups = (numberOfGroups, teamsArray) => {
  const groupsArray = [];

  for (let i = 0; i < numberOfGroups; i++) {
    groupsArray.push([]);
  }

  return groupsArray;
};

export default splitGroups;
