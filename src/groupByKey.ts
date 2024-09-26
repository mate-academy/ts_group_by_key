type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T, key: keyof T): GroupsMap<T> {
  const res: GroupsMap<T> = {};

  if (!(items instanceof Array) || !key) {
    return res;
  }

  items.forEach((item) => {
    if (!(item[key] in res)) {
      res[item[key]] = [];
    }

    res[item[key]].push(item);
  });

  return res;
}
