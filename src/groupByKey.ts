type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const groupsMap: GroupsMap<T> = {};

  const uniqueKeys: Set<string> = new Set(
    items.map((item) => String(item[key])),
  );

  Array.from(uniqueKeys).forEach((uniqueKey) => {
    groupsMap[uniqueKey] = items
      .filter((item) => String(item[key]) === uniqueKey);
  });

  return groupsMap;
}
