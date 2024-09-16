type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items:T[], key: keyof T): GroupsMap<T> {
  const result: GroupsMap<T> = {};

  for (let i = 0; i < items.length; i += 1) {
    const resultKey = String(items[i][key]);

    if (resultKey in result) {
      result[resultKey].push(items[i]);
    } else {
      result[resultKey] = [items[i]];
    }
  }

  return result;
}
