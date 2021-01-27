/* eslint-disable no-console */
'use strict';

interface Item {
  [key: string]: any
}

interface ItemsGroup<T> {
  [key: string]: T[]
}

export function groupByKey(array: Item[], key: string) {
  const result = {} as ItemsGroup<Item>;

  const keys = array.map(el => el[key].toString());

  for (const filteredKey of keys) {
    result[filteredKey] = [];

    array.filter(el => el[key].toString() === filteredKey)
      .forEach(el => result[filteredKey].push(el));
  }

  return result;
}
