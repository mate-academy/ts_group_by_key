type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  return items.reduce((acc: GroupsMap<T>, item: T) => {
    const currentKey = String(item[key]);

    if (!acc[currentKey]) {
      acc[currentKey] = [];
    }

    acc[currentKey].push(item);

    return acc;
  }, {});
}
