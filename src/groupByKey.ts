type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T extends object>(
  items: T[],
  key: keyof T,
): GroupsMap<T> {
  const groupMap: GroupsMap<T> = {};

  for (const item of items) {
    const groupKey = String(item[key]);

    if (!Object.hasOwn(groupMap, groupKey)) {
      groupMap[groupKey] = [];
    }

    groupMap[groupKey].push(item);
  }

  return groupMap;
}
