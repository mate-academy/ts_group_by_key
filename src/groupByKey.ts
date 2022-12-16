type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  return items.reduce((acc, item) => {
    const value = item[key];

    acc[value as string] = acc[value as string] || [];
    acc[value as string].push(item);

    return acc;
  }, {} as GroupsMap<T>);
}
