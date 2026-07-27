type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const res: GroupsMap<T> = {};

  for (const item of items) {
    const keyRes = item[key] as string | number;

    if (!(keyRes in res)) {
      res[keyRes] = [];
    }
    res[keyRes].push(item);
  }

  return res;
}
