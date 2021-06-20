'use strict';

// describe interfaces

interface Item {
  [key: string]: any
};

interface ItemsGroup<T> {
  [key: string]: T[]
};

export function groupByKey(array: any, key: string) {
  // write code here;
  const itemsGroup: ItemsGroup<Item> = {};

  if (array.length > 0) {
    array.forEach((element: Item) => {
      element[key] in itemsGroup
        ? itemsGroup[element[key]].push(element)
        : itemsGroup[element[key]] = [element];
    });
  }

  return itemsGroup;
}
