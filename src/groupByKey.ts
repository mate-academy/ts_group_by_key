type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items:T[], key:keyof T[]):GroupsMap<T> {
  const res:GroupsMap<T> = {};

  items.forEach((item) => {
    const keyForGroup = item[key];

    if (res[keyForGroup]) {
      res[keyForGroup].push(item);
    } else {
      res[keyForGroup] = [item];
    }
  });

  return res;
}
