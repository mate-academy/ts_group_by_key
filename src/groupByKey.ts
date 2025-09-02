type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  return items.reduce((acc, obj) => {
    const groupKey = String(obj[key]);

    if (!acc[groupKey]) {
      acc[groupKey] = [];
    }

    acc[groupKey].push(obj);

    return acc;
  }, {} as GroupsMap<T>);
}
