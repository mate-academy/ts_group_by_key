type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey(
  items: GroupsMap<T>[],
  key: keyof GroupsMap<T>,
): GroupsMap<T> {
  const groups = items
    .map((item) => item[key])
    .filter((item, index, arr) => arr.indexOf(item) === index);

  const groupedList = {};

  groups.forEach((group) => {
    groupedList[group] = items.filter((item) => item[key] === group);
  });

  return groupedList;
}
