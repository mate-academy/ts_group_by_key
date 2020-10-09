'use strict';

// describe interfaces
interface Item {
  [key: string]: any
}
interface ItemGroup<T> {
  [key: string]: T[]
}

export function groupByKey<T extends Item>(array: T[], key: keyof T) {
  const resultObj: ItemGroup<T> = {};

  for (const item of array) {
    if (!resultObj.hasOwnProperty(item[key])) {
      resultObj[item[key]] = [];
    }

    resultObj[item[key]].push(item);
  }

  return resultObj;
  // write code here;
}
