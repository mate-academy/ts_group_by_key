type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  return items.reduce((acc, item) => {
    const keyValue = item[key];
    const stringKey = String(keyValue);

    if (!acc[stringKey]) {
      acc[stringKey] = [];
    }
    acc[stringKey].push(item);

    return acc;
  }, {} as GroupsMap<T>);
}
