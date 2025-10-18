type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T, R extends keyof T>(
  items: T[],
  key: R,
): GroupsMap<T> {
  const groups: GroupsMap<T> = {};

  for (const item of items) {
    const groupKey = String(item[key]);

    if (!groups[groupKey]) {
      groups[groupKey] = [];
    }

    groups[groupKey].push(item);
  }

  return groups;
}
