'use strict';

interface Item {
  [key: string]: any
}

interface ItemsGroup<T> {
  [key: string]: T[]
}

export function groupByKey<T>(array: T[], key: string): ItemsGroup<Item> {
  return array.reduce((newObj: ItemsGroup<Item>, item: Item) => {
    if (!newObj.hasOwnProperty(item[key])) {
      newObj[item[key]] = [item];
    } else {
      newObj[item[key]].push(item);
    }

    return newObj;
  }, {});
}
