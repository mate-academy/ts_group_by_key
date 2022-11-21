type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items:T[], key: string): GroupsMap<T> {
  return items.reduce((prev:GroupsMap<T>, item: T): GroupsMap<T> => {
    const obj = prev;
    const itemKey = item[key];

    if (!prev[itemKey]) {
      obj[itemKey] = [];
    }
    obj[itemKey].push(item);

    return obj;
  }, {});
}
