type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const groupsMap: GroupsMap<T> = {};

  for (const item of items) {
    const itemKey = item[key]?.toString();

    if (!itemKey) {
      continue;
    }

    groupsMap[itemKey] ||= [];

    groupsMap[itemKey].push(item);
  }

  return groupsMap;
}
