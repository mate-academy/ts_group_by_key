type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T extends Record<string, any>>(
  items: T[],
  key: string,
): GroupsMap<T> {
  const res: GroupsMap<T> = {};

  for (const item of items) {
    const groupKey: string = item[key];

    if (!res.hasOwnProperty(groupKey)) {
      res[groupKey] = [];
    }
    res[groupKey].push(item);
  }

  return res;
}
