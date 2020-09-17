/* eslint-disable no-useless-constructor */
'use strict';

interface Item {
  [key: string]: any
};

interface ItemsGroup<T> {
  [key: string]: T[]
};

export function groupByKey<T extends Item>(array: T[], key: keyof T) {
  const result: ItemsGroup<T> = {};

  for (let i = 0; i < array.length; i++) {
    if (!result.hasOwnProperty(array[i][key])) {
      result[array[i][key]] = [];
    }
    result[array[i][key]].push(array[i]);
  }

  return result;
};
