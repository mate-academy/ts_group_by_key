type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const sorted: GroupsMap<T> = {};

  for (let i = 0; i < items.length; i++) {
    const groupKey = String(items[i][key]);

    if (!sorted[groupKey]) {
      sorted[groupKey] = [];
    }
    sorted[groupKey].push(items[i]);
  }

  return sorted;
}
