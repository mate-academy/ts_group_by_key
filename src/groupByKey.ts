type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  return items.reduce((acc: GroupsMap<T>, elem) => {
    const groupedKey = String(elem[key]);

    if (!acc[groupedKey]) {
      acc[groupedKey] = [];
    }

    acc[groupedKey].push(elem);

    return acc;
  }, {});
}
