type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T, K extends keyof T>(
  items: T[],
  key: K,
): GroupsMap<T> {
  return items.reduce((acc, item) => {
    const getKey = String(item[key]);

    if (!acc[getKey]) {
      acc[getKey] = [];
    }

    acc[getKey].push(item);

    return acc;
  }, {} as GroupsMap<T>);
}
