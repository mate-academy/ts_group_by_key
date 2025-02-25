type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T extends Record<string, any>>(
  items: T[],
  key: string,
): GroupsMap<T> {
  const result: GroupsMap<T> = {};

  for (const item of items) {
    if (!result[item[key]]) {
      result[item[key]] = [item];
    } else {
      result[item[key]].push(item);
    }
  }

  return result;
}
