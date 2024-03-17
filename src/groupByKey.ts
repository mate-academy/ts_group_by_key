type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const grouped: GroupsMap<T> = {};

  items.forEach((item) => {
    const value = item[key];
    const groupKey = String(value);

    grouped[groupKey] = [...(grouped[groupKey] || []), item];
  });

  return grouped;
}
