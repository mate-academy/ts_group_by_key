'use strict';

interface Item {
  [key: string]: any
};

interface ItemsGroup<T> {
  [key: string]: T[]
};

export function groupByKey(array: Item[], key: keyof Item) {
  const result = {} as ItemsGroup<Item>;

  for (const item of array) {
    if (!result[item[key]]) {
      result[item[key]] = [];
    }
    result[item[key]].push(item);
  }

  return result;
}
