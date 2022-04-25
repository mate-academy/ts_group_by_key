type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const res: GroupsMap<T> = {};

  for (let i = 0; i < items.length; i += 1) {
    const keyForGroup = String(items[i][key]);

    if (!Object.prototype.hasOwnProperty.call(res, keyForGroup)) {
      res[keyForGroup] = [];
    }

    res[keyForGroup].push(items[i]);
  }

  return res;
}
