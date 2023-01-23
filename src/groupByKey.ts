type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  return items.reduce((acc: GroupsMap<T>, item) => {
    const groupBy = `${item[key]}`;

    acc[groupBy] = (acc[groupBy] || []).concat(item);

    return acc;
  }, {});
}
