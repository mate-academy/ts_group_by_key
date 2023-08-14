/* eslint-disable no-restricted-syntax */
type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items, key): GroupsMap<T> {
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
