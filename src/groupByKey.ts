type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  return items.reduce((acc: GroupsMap<T>, item) => {
    const groupedByKey = String(item[key]);

    if (!acc[groupedByKey]) {
      acc[groupedByKey] = [];
    }

    acc[groupedByKey].push(item);

    return acc;
  }, {});
}
