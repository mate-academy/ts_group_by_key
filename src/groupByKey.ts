type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  return items.reduce((acc, item) => {
    const groupKey = String(item[key]);

    if (groupKey in acc) {
      acc[groupKey].push(item);
    } else {
      acc[groupKey] = [item];
    }

    return acc;
  }, {} as GroupsMap<T>);
}
