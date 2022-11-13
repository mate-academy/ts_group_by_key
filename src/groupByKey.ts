type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const result: GroupsMap<T> = {};

  for (let i: number = 0; i < items.length; i += 1) {
    if (!result[`${items[i][key]}`]) {
      result[`${items[i][key]}`] = [];
    }

    result[`${items[i][key]}`].push(items[i]);
  }

  return result;
}
