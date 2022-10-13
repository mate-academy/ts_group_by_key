type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(
  items: T[],
  key: keyof T,
): GroupsMap<T> {
  const groupedList: GroupsMap<T> = {};

  // to get unique groups array from given items
  items
    .map((item) => item[key])
    .filter((item, index, arr) => arr.indexOf(item) === index)
    .forEach((group) => {
      groupedList[String(group)] = items.filter((item) => item[key] === group);
    });

  return groupedList;
}
