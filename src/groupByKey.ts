type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T extends Record<string, any>, K extends keyof T>(
  items: T[],
  key: K,
): GroupsMap<T> {
  return items.reduce((acc, itemm) => {
    const groupKey = String(itemm[key]);

    if (!acc[groupKey]) {
      acc[groupKey] = [];
    }
    acc[groupKey].push(itemm);

    return acc;
  }, {} as GroupsMap<T>);
}
