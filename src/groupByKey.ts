'use strict';

interface Item {
  [key: string]: any
}

interface ItemsGroup<T> {
  [key: string]: T[]
}

export function groupByKey(array: Item[], key: string) {
  const grouped: ItemsGroup<Item> = {};

  array.forEach(item => {
    (grouped.hasOwnProperty(item[key]))
      ? grouped[item[key]].push(item)
      : grouped[item[key]] = [item];
  });

  return grouped;
}
