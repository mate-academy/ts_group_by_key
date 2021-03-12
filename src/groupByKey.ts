'use strict';

interface Item {
  [key: string]: any;
}

interface ItemsGroup<T> {
  [key: string]: T[];
}

export function groupByKey(
  array: Array<Item>,
  key: string
): Record<string, any> {
  const resultObj: ItemsGroup<object> = {};

  for (const obj in array) {
    if (resultObj.hasOwnProperty(array[obj][key])) {
      resultObj[array[obj][key]].push(array[obj]);
    } else {
      resultObj[array[obj][key]] = [];
      resultObj[array[obj][key]].push(array[obj]);
    }
  }

  return resultObj;
}
