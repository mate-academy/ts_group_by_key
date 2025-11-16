type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T extends object, K extends keyof T>(
  items: T[],
  key: K,
): GroupsMap<T> {
  const groupsMap: GroupsMap<T> = {};

  for (const item of items) {
    const value = item[key];

    const groupKey = String(value);

    if (!groupsMap[groupKey]) {
      groupsMap[groupKey] = [];
    }

    groupsMap[groupKey].push(item);
  }

  return groupsMap;
}
