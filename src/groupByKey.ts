'use strict';

interface Item {
  [key: string]: any;
}

interface ItemsGroup<T> {
  [key: string]: T[];
}

export function groupByKey<T extends Item, K extends keyof T>(
  array: T[],
  key: K
): ItemsGroup<T> {
  const result: ItemsGroup<T> = {};

  array.forEach((item) => {
    if (item[key] && !result.hasOwnProperty(item[key])) {
      result[item[key]] = [];
    }

    result[item[key]].push(item);
  });

  return result;
}
