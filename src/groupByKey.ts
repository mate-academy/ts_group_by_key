type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  return items.reduce((acc: GroupsMap<T>, item) => {
    const value = String(item[key]);

    if (!(value in acc)) {
      acc[value] = [];
    }

    acc[value].push(item);

    return acc;
  }, {});
}
