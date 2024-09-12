type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  return items.reduce((acc: GroupsMap<T>, item) => {
    const keyValue = String(item[key]);

    if (!acc[keyValue]) {
      acc[keyValue] = [];
    }
    acc[keyValue].push(item);

    return acc;
  }, {});
}
