type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: [], key: keyof T): GroupsMap<T> {
  return items.reduce((result: GroupsMap<T>, item) => {
    const itemKey = item[key];
    const res = result;

    if (!res[itemKey]) {
      res[itemKey] = [];
    }

    res[itemKey].push(item);

    return res;
  }, {});
}
