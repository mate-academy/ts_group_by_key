type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const res: GroupsMap<T> = {};

  items.forEach((item) => {
    const itemKey = `${item[key]}`;

    if (itemKey in res) {
      res[itemKey].push(item);
    } else {
      res[itemKey] = [item];
    }
  });

  return res;
}
