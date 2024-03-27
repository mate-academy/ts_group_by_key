type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const res: GroupsMap<T> = {};

  for (const item of items) {
    if (!res.hasOwnProperty(item[key] as string)) {
      res[item[key] as string] = items.filter(
        (elem) => elem[key] === item[key],
      );
    }
  }

  return res;
}
