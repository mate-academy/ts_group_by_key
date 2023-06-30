type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], initialKey: string) : GroupsMap<T> {
  const groupedItems: GroupsMap<T> = {};
  const keys: string[] = items.map((item) => item[initialKey]);

  keys.forEach((key) => {
    groupedItems[key] = items.filter((item) => item[initialKey] === key);
  });

  return groupedItems;
}
