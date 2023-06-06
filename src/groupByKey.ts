type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  return items.reduce((obj: GroupsMap<T>, item: T) => {
    const acc = obj;
    const itemKey = String(item[key]);

    if (itemKey in acc) {
      acc[itemKey].push(item);
    } else {
      acc[itemKey] = [item];
    }

    return acc;
  }, {});
}
