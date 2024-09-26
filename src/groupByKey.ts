type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const grouped: GroupsMap<T> = {};

  items.forEach((item) => {
    const groupKey = String(item[key]);

    if (!grouped[groupKey]) {
      grouped[groupKey] = [];
    }

    grouped[groupKey].push(item);
  });

  return grouped;
}
