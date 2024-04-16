type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const groupsMap: GroupsMap<T> = {};

  for (const item of items) {
    if (!groupsMap[item[key] as string]) {
      groupsMap[item[key] as string] = [];
    }
    groupsMap[item[key] as string].push(item);
  }

  return groupsMap;
}
