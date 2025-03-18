type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T, K extends keyof T>(
  items: T[],
  key: K,
): GroupsMap<T> {
  const grouped: GroupsMap<T> = {};

  for (const item of items) {
    const itemKey = String(item[key]);

    grouped[itemKey] = grouped[itemKey] || [];
    grouped[itemKey].push(item);
  }

  return grouped;
}
