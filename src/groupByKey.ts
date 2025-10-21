type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const res: GroupsMap<T> = {} as GroupsMap<T>;

  items.forEach((item) => {
    const value = String(item[key]);

    if (!res[value]) {
      res[value] = [];
    }
    res[value].push(item);
  });

  return res;
}
