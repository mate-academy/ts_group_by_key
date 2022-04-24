type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: string): GroupsMap<T> {
  const result: GroupsMap<T> = {};

  for (let i: number = 0; i < items.length; i += 1) {
    if (!result[items[i][key].toString()]) {
      result[items[i][key].toString()] = [];
    }
    result[items[i][key].toString()].push(items[i]);
  }

  return result;
}
