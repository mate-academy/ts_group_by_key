type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const result = items.reduce((acc, obj) => {
    const groupKey = obj[key] as string;

    if (!acc[groupKey]) {
      acc[groupKey] = [];
    }
    acc[groupKey].push(obj);

    return acc;
  }, {} as GroupsMap<T>);

  return result;
}
