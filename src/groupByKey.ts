type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const groupsMap: GroupsMap<T> = {};

  for (const item of items) {
    const itemKey = item[key] as string;

    if (itemKey in groupsMap) {
      groupsMap[itemKey].push(item);
    } else {
      groupsMap[itemKey] = [item];
    }
  }

  return groupsMap;
}
