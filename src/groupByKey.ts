type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  return items.reduce((acc, item) => {
    const itemKey = String(item[key]);

    if (!acc[itemKey]) {
      acc[itemKey] = [];
    }
    acc[itemKey].push(item);

    return acc;
  }, {} as GroupsMap<T>);
}
