type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const result: GroupsMap<T> = {};

  for (let i = 0; i < items.length; i++) {
    const item = String(items[i][key]);

    if (item in result) {
      result[item].push(items[i]);
    } else {
      result[item] = [items[i]];
    }
  }

  return result;
}
