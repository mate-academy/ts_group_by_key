
type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  return items.reduce((acc: GroupsMap<T>, item) => {
    const groupedKey = String(item[key]);

    if (!(groupedKey in acc)) {
      acc[groupedKey] = [item];
    } else {
      acc[groupedKey].push(item);
    }

    return acc;
  }, {});
}
