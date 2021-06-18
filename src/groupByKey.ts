'use strict';

interface ItemsGroup {
  [key: string]: any;
}

export function groupByKey(array: ItemsGroup[], key: string) {
  const result: ItemsGroup = {};

  for (const item of array) {
    if (item[key] in result) {
      result[item[key]].push(item)
    } else {
      result[item[key]] = [item];
    }
  }

  return result

}
