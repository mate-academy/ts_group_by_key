type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(
  items: T[],
  key: keyof T,
): GroupsMap<T> {
  // to get unique groups array from given items
  const groups = items
    .map((item) => item[key])
    .filter((item, index, arr) => arr.indexOf(item) === index);

  const groupedList: GroupsMap<T> = {};

  // assign the array to the matching group key
  groups.forEach((group) => {
    groupedList[group] = items.filter((item) => item[key] === group);
  });

  return groupedList;
}
