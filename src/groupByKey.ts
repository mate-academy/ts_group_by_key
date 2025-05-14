type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: string): GroupsMap<T> {
  const res: GroupsMap<T> = {};

  for (const item of items) {
    const currentKey = String(item[key as keyof T]);

    if (res[currentKey]) {
      res[currentKey].push(item);
    } else {
      res[currentKey] = [item];
    }
  }

  return res;
}
