type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const groupsMap: GroupsMap<T> = {};
  const values: Set<string> = new Set(items.map((item) => String(item[key])));

  Array.from(values).forEach((value) => {
    groupsMap[value] = items.filter((item) => String(item[key]) === value);
  });

  return groupsMap;
}
