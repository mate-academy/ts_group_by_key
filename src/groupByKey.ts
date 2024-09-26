type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  return items.reduce((acc: GroupsMap<T>, item) => {
    const groupKey = String(item[key]);

    if (!(groupKey in acc)) {
      acc[groupKey] = [item];
    } else {
      acc[groupKey].push(item);
    }

    return acc;
  }, {});
}
