type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  return items.reduce((acc, item: T) => {
    const itemGroup = String(item[key]);

    if (!acc[itemGroup]) {
      acc[itemGroup] = [];
    }

    acc[itemGroup].push(item);

    return acc;
  }, {} as GroupsMap<T>);
}
