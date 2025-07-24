type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const obj: GroupsMap<T> = {};

  for (const item of items) {
    const groupKey = String(item[key]);

    if (!obj[groupKey]) {
      obj[groupKey] = [];
    }

    obj[groupKey].push(item);
  }

  return obj;
}
