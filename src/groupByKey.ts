type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items, key): GroupsMap<T> {
  // write code here;
  const result: GroupsMap<T> = {};

  for (const item of items) {
    const value = item[key];

    if (!(value in result)) {
      result[value] = [];
    }
    result[value].push(item);
  }

  return result;
}
