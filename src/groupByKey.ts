type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  return items.reduce((acc: GroupsMap<T>, item) => {
    const arrItem = String(item[key]);

    if (!acc[arrItem]) {
      acc[arrItem] = [];
    }

    acc[arrItem].push(item);

    return acc;
  }, {});
}
