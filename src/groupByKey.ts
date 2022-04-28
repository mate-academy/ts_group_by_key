type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const res: GroupsMap<T> = {};

  items.forEach((obj) => {
    const property: string = String(obj[key]);

    if (!(property in res)) {
      res[property] = [];
    }
    res[property].push(obj);
  });

  return res;
}
