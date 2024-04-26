type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: string): GroupsMap<T> {
  const ret: GroupsMap<T> = {};

  items.forEach((item) => {
    if (!ret[item[key]]) {
      ret[item[key]] = [];
    }

    ret[item[key]].push(item);
  });

  return ret;
}
