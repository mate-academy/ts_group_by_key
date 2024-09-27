type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  return items.reduce((acc: GroupsMap<T>, item: T) => {
    const valueToType = String(item[key]);

    if (!acc[valueToType]) {
      acc[valueToType] = [];
    }
    acc[valueToType].push(item);

    return acc;
  }, {});
}
