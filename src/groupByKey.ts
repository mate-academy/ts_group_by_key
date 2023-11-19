/* eslint-disable no-restricted-syntax */
type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const arrOfValues: string[] | number[] = [];
  const result: GroupsMap<T> = {};

  // eslint-disable-next-line no-restricted-syntax
  for (const item of items) {
    if (!arrOfValues.includes(item[key])) {
      arrOfValues.push(item[key]);
    }
  }

  for (const ch of arrOfValues) {
    result[ch] = [];
  }

  for (const ch of arrOfValues) {
    for (const item of items) {
      if (item[key] === ch) {
        result[ch].push(item);
      }
    }
  }

  return result;
}
