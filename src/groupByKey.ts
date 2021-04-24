'use strict';

interface Item {
  [key: string]: any
}

interface ItemsGroup<T> extends Item {
  [key: string]: T[]
}

export function groupByKey<T, K extends keyof T>(
  array: Array<T>, key: K): ItemsGroup<T> {
  const result: ItemsGroup<T> = {};

  for (const obj of array) {
    const resultKey = obj[key];

    if (!(typeof resultKey === 'string' || typeof resultKey === 'number')) {
      continue;
    }

    if (!(resultKey in result)) {
      result[resultKey] = [];
    }

    result[resultKey].push(obj);
  }

  return result;
}
