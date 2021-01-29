'use strict';

interface Item {
  [key: string]: any
}

interface ItemsGroup<T> extends Item {
  [key: string]: T[]
}

export function groupByKey(
  array: Array<Item>,
  key: keyof Item,
): ItemsGroup<Item> {
  const result: ItemsGroup<Item> = {};

  array.forEach(item => {
    if (!result.hasOwnProperty(item[String(key)])) {
      result[item[String(key)]] = [];
    }

    result[item[String(key)]].push(item);
  });

  return result;
}
