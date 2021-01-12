'use strict';

interface Item {
  [key: string]: any
}

interface ItemsGroup<T> {
  [key: string]: T[]
};

export function groupByKey<T extends Item>(
  items: T[], key: keyof T
): ItemsGroup<T> {
  const group: ItemsGroup<T> = {};

  for (const item of items) {
    if (!group.hasOwnProperty(item[key])) {
      group[item[key]] = [];
    }

    group[item[key]].push(item);
  }

  return group;
};
