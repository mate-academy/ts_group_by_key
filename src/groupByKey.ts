type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T extends GroupsMap<T>>(
  items: T[],
  key: keyof T,
): GroupsMap<T> {
  return items.reduce((acc: GroupsMap<T>, item: T) => {
    const groupKey = String(item[key]);

    if (!acc[groupKey]) {
      acc[groupKey] = [];
    }

    acc[groupKey].push(item);

    return acc;
  }, {} as GroupsMap<T>);
}
