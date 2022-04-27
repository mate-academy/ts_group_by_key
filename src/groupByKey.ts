type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const result: GroupsMap<T> = {};

  for (let i: number = 0; i < items.length; i += 1) {
    const item: string = String(items[i][key]);

    if (!result[item]) {
      result[item] = [];
    }
    result[item].push(items[i]);
  }

  return result;
}
