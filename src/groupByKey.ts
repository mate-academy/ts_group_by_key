'use strict';

interface Item {
  [key: string]: any
}

interface ItemsGroup<T> {
  [key: string]: T[]
}

export function groupByKey
<T extends Item>(array: T[], key: keyof T): ItemsGroup<T> {
  const result: ItemsGroup<T> = {};

  array.reduce((acc, value) => {
    if (!acc[value[key]]) {
      acc[value[key]] = [value];

      return acc;
    }
    acc[value[key]].push(value);

    return acc;
  }, result);

  return result;
}
