type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T extends object>(
  items: T[],
  key: keyof T,
): GroupsMap<T> {
  const groups: GroupsMap<T> = {};

  for (const item of items) {
    if (key in item) {
      const groupKey = String(item[key]);

      if (!groups[groupKey]) {
        groups[groupKey] = [];
      }

      groups[groupKey].push(item);
    }
  }

  return groups;
}
