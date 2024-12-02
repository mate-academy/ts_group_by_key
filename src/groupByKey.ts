type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const grouped = items.reduce((acc: GroupsMap<T>, item) => {
    const groupKey = String(item[key]);

    if (!acc[groupKey]) {
      acc[groupKey] = [];
    }
    acc[groupKey].push(item);

    return acc;
  }, {});

  return grouped;
}
