'use strict';

interface Item {
  [key: string]: any
}

interface ItemsGroup<T> {
  [key: string]: T[]
}

export function groupByKey<T extends Item>(array: T[], key: keyof T) {
  const group: ItemsGroup<T> = {};

  array.forEach((obj) => {
    if (!group.hasOwnProperty(obj[key])) {
      group[obj[key]] = [];
    }

    group[obj[key]].push(obj);
  });

  return group;
}
