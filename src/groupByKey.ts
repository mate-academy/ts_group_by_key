type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const res: GroupsMap<T> = {};

  for (const k of items) {
    const groupKey = String(k[key]);

    if (!res[groupKey]) {
      res[groupKey] = [];
      res[groupKey].push(k);
    } else {
      res[groupKey].push(k);
    }
  }

  return res;
}
