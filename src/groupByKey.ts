type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const res: GroupsMap<T> = {};

  items.forEach((item) => {
    const objKey = `${item[key]}`;

    if (res[objKey]) {
      res[objKey].push(item);
    } else {
      res[objKey] = [item];
    }
  });

  return res;
}
