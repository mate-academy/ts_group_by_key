type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T, K extends keyof T>(
  items: T[],
  key: K,
): GroupsMap<T> {
  const groupedItems = items.reduce((acc, item) => {
    const group = String(item[key]);

    if (!acc[group]) {
      acc[group] = [];
      acc[group].push(item);
    } else {
      acc[group].push(item);
    }

    return acc;
  }, {} as GroupsMap<T>);

  return groupedItems;
}
