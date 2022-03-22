type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const res: GroupsMap<T> = {};

  items.forEach((element: T) => {
    const groupKey: string = String(element[key]);

    if (!res[groupKey]) {
      res[groupKey] = [];
    }

    res[groupKey].push(element);
  });

  return res;
}
