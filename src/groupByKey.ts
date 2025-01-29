type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  return items.reduce<GroupsMap<T>>((res, item) => {
    const groupKey = String(item[key]);

    if (!res[groupKey]) {
      res[groupKey] = [];
    }

    res[groupKey].push(item);

    return res;
  }, {});
}
