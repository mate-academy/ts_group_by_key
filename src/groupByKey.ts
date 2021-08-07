'use strict';

// describe interfaces
interface Item {
  [key: string]: any
};
interface ItemsGroup<T> {
  [key: string]: T[]
};

export function groupByKey(array:Item[], key:keyof Item):ItemsGroup<Item> {
  const resultObject:ItemsGroup<Item> = {};

  for (const item of array) {
    if (resultObject[item[key]]) {
      resultObject[item[key]].push(item);
    } else {
      resultObject[item[key]] = [item];
    }
  }

  return resultObject;
}
