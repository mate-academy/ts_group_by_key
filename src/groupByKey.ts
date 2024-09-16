/* eslint-disable max-len */
type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: string): GroupsMap<T> {
  const result: GroupsMap<T> = {};

  items.forEach((value) => {
    const keyValue = value[key];

    if (result[keyValue]) {
      result[keyValue].push(value);
    } else {
      result[keyValue] = [value];
    }
  });

  return result;
}
