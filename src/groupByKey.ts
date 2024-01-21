type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T):
GroupsMap<T> {
  const obj: GroupsMap<T> = {};

  items.map((item: T) => {
    obj[item[key]] = [];

    return obj;
  });

  items.map((item) => {
    Object.keys(item).forEach((k) => {
      if (k === key) {
        obj[item[key]].push(item);
      }
    });

    return obj;
  });

  return obj;
}
