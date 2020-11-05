'use strict';

interface Item {
  [key: string]: any;
}

interface ItemsGroup<T> {
  [key: string]: T[];
}

export function groupByKey<T extends Item>(array: T[], key: keyof T) {
  const res: ItemsGroup<T> = {};

  for (const element of array) {
    if (!res[element[key]]) {
      res[element[key]] = [];
    }

    res[element[key]].push(element);
  }

  return res;
}
