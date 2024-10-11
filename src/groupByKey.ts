type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  return items.reduce((acc: GroupsMap<T>, item: T) => {
    const groupedKeyValue = String(item[key]);

    if (!acc[groupedKeyValue]) {
      acc[groupedKeyValue] = [];
    }
    acc[groupedKeyValue].push(item);

    return acc;
  }, {} as GroupsMap<T>);
}
