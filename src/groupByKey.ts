'use strict';

interface Item {
  [key: string]: any
}

interface ItemsGroup<T> {
  [key: string]: T[]
};

export function groupByKey<T extends Item>(array: T[], key: keyof T) {
  const result: ItemsGroup<T> = {};

  for (const item of array) {
    if (!result.hasOwnProperty(item[key])) {
      result[item[key]] = [];
    }
    result[item[key]].push(item);
  }

  return result;
};
