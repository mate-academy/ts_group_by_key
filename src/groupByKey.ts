type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const result: GroupsMap<T> = {};

  for (const item of items) {
    const itemKey = String(item[key]);

    if (result[itemKey]) {
      result[itemKey].push(item);
    } else {
      result[itemKey] = [item];
    }
  }

  return result;
}
