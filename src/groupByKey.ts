type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: string): GroupsMap<T> {
  const res: GroupsMap<T> = {};

  items.forEach((item: T) => {
    if (!res[item[key]]) {
      res[item[key]] = [];
    }

    res[item[key]].push(item);
  });

  return res;
}
