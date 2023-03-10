import { Key } from 'readline';

type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey(items: Key[], key: GroupsMap): {} {
  const defaultver: {} = {};

  if (items.length === 0) {
    return defaultver;
  }

  const result: {} = {};

  items.map((item) => {
    if (!result[item[key]]) {
      result[item[key]] = [];
    }

    result[item[key]].push(item);

    return item;
  });

  return result;
}
