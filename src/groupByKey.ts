type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const groupedItems: GroupsMap<T> = {};
  const values = Array.from(new Set(items.map((i) => i[key])));

  values.forEach((value) => {
    groupedItems[String(value)] = items.filter((i) => i[key] === value);
  });

  return groupedItems;
}
