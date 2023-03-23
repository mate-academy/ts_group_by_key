type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const result: GroupsMap<T> = {};

  for (let i = 0; i < items.length; i += 1) {
    const value = String(items[i][key]);

    if (!result[value]) {
      result[value] = [items[i]];
    } else {
      result[value].push(items[i]);
    }
  }

  return result;
}
