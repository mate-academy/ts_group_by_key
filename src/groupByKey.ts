type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: [], key: keyof T): GroupsMap<T> {
  const result: GroupsMap<T> = {};

  for (let i: number = 0; i < items.length; i += 1) {
    if (result[items[i][key]]) {
      result[items[i][key]].push(items[i]);
    } else {
      result[items[i][key]] = [items[i]];
    }
  }

  return result;
}
