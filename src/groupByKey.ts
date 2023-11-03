type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const result: GroupsMap<T> = {};

  for (let i = 0; i < items.length; i += 1) {
    const itemKey = String(items[i][key]);

    if (itemKey in result) {
      result[itemKey].push(items[i]);
    } else {
      result[itemKey] = [items[i]];
    }
  }

  return result;
}
