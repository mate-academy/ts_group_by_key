type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: string): GroupsMap<T> {
  return items.reduce((acc: GroupsMap<T>, item: T) => {
    const keyValue = String(item[key]);

    if (!acc[keyValue]) {
      acc[keyValue] = [];
    }

    acc[keyValue].push(item);

    return acc;
  }, {});
}
