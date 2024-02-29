type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T extends {}>(
  items: T[],
  key: keyof T,
): GroupsMap<T> {
  const groupsMap: GroupsMap<T> = {};

  items.forEach((item: T) => {
    const groupKey = String(item[key]);

    if (groupsMap[groupKey]) {
      groupsMap[groupKey].push(item);
    } else {
      groupsMap[groupKey] = [item];
    }
  });

  return groupsMap;
}
