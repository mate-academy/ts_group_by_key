'use strict';

// describe interfaces
interface Item {
  [key: string]: any
}
interface ItemsGroup<T> {
  [key: string]: T[]
}

export function groupByKey(array: Item[], key: keyof Item) {
  const itemsGroup: ItemsGroup<Item> = {};

  for (const obj of array) {
    const value = `${obj[key]}`;

    if (!itemsGroup[value]) {
      itemsGroup[value] = [];
    }
    itemsGroup[value].push(obj);
  }

  return itemsGroup;
}
