type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const keysSet: string[] = Array.from(new Set(items.map((el) => el[key])));

  const groupedItems: GroupsMap<T> = {};

  for (const newKey of keysSet) {
    groupedItems[newKey] = items.filter((el) => el[key] === newKey);
  }

  return groupedItems;
}
