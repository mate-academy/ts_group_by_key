type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T, K extends keyof T>(
  items: T[],
  key: K,
): GroupsMap<T> {
  return items.reduce((acc: GroupsMap<T>, item: T) => {
    const sortKey: string = String(item[key]);

    if (!acc[sortKey]) {
      acc[sortKey] = [];
    }

    acc[sortKey].push(item);

    return acc;
  }, {} as GroupsMap<T>);
}
