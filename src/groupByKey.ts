type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  return items.reduce((acc, item) => {
    const groupKey = item[key] as string;

    if (!acc[groupKey]) {
      acc[groupKey] = [];
    }
    acc[groupKey].push(item);

    return acc;
  }, {} as GroupsMap<T>);
}
