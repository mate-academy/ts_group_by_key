type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const res: GroupsMap<T> = {};

  items.forEach((item) => {
    const itemKey = String(item[key]);

    if (!res[itemKey]) {
      res[itemKey] = [];
    }

    res[itemKey].push(item);
  });

  return res;
}
