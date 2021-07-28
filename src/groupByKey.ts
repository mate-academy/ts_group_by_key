'use strict';

// describe interfaces
interface Item {
  [key: string]: any
}

interface ItemsGroup<T> {
  [key: string]: T[]
}

export function groupByKey(array: Item[], key: string): ItemsGroup<Item> {
  return array.reduce((result: ItemsGroup<Item>, item: Item) => {
    !result.hasOwnProperty(item[key])
      ? result[item[key]] = [item]
      : result[item[key]].push(item);

    return result;
  }, {});
}
