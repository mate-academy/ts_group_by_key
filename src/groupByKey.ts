'use strict';

interface Item {
  [key: string]: any
};

interface ItemGroup<T> {
  [key: string]: T[];
};

export function groupByKey(array: Item[], key: keyof Item) {
  const resultObj: ItemGroup<Item> = {};

  for (const obj of array) {
    if (!(obj[key] in resultObj)) {
      resultObj[obj[key]] = [];
    };
    resultObj[obj[key]].push(obj);
  };

  return resultObj;
};
