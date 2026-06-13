type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  return items.reduce((prev, item) => {
    const itemKey = `${item[key]}`;

    if (!prev[itemKey]) {
      prev[itemKey] = [];
    }

    prev[itemKey].push(item);

    return prev;
  }, {} as GroupsMap<T>);
}
