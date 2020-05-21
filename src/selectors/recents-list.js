export default (list, recentsList) => {
  const itemNames = list.map((item) => {
    return item.name;
  });

  return recentsList.filter((item) => {
    return !itemNames.includes(item.name);
  });
};
