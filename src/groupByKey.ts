type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const obj = items.reduce((acc, ob) => {
    const groupKey = ob[key] as string;

    if (!acc[groupKey]) {
      acc[groupKey] = [];
    }
    acc[groupKey].push(ob);

    return acc;
  }, {} as GroupsMap<T>);

  return obj;
}
