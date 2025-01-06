type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T extends object>(
  items: T[],
  key: keyof T,
): GroupsMap<T> {
  const res: GroupsMap<T> = {};

  for (const item of items) {
    const grKey = String(item[key]);

    if (Object.hasOwn(res, grKey)) {
      res[grKey].push(item);
    } else {
      res[grKey] = [item];
    }
  }

  return res;
}
