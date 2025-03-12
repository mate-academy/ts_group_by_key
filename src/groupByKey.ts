type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T, K extends keyof T>(
  items: T[],
  key: K,
): GroupsMap<T> {
  const grouped: GroupsMap<T> = {};
  const keys = new Set(items.map((item) => item[key] as string));

  for (const item of items) {
    const itemKey = item[key] as string;

    if (keys.has(itemKey)) {
      grouped[itemKey] = grouped[itemKey] || [];
      grouped[itemKey].push(item);
    }
  }

  return grouped;
}
