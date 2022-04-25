type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const res: GroupsMap<T> = {};

  items.forEach((item) => {
    const newKey = String(item[key]);

    if (!res[newKey]) {
      res[String(item[key])] = [];
    }

    res[newKey].push(item);
  });

  return res;
}
