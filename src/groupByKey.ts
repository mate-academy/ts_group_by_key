'use strict';

interface Item {
  [key: string]: any
}

interface ItemsGroup<T> {
  [key: string]: T[]
}

export function groupByKey(array: Item[], key: keyof Item) {
  const grouped = {} as ItemsGroup<Item>;

  for (const obj of array) {
    if (!grouped.hasOwnProperty(obj[key])) {
      grouped[obj[key]] = [];
    }
    grouped[obj[key]].push(obj);
  }

  return grouped;
}
