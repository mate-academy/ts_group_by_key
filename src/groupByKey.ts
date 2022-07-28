type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const res: GroupsMap<T> = {};

  items.forEach((item) => {
    const resKey = String(item[key]);

    if (!res[resKey]) {
      res[resKey] = [];
    }
    res[resKey].push(item);
  });

  return res;
}
