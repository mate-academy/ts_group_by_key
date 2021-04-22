'use strict';

interface Item {
  [key: string]: any
}

interface ItemsGroup<T> extends Item{
  [key: string]: T[]
}

export function groupByKey<T>(
  array: Array<T>, key: string): ItemsGroup<T> {
  const result: ItemsGroup<T> = {};

  for (const obj of array) {
    const resultKey = obj[key];

    if (resultKey in result) {
      result[resultKey].push(obj);
    } else {
      result[resultKey] = [obj];
    }
  }

  return result;
}
