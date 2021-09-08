import { Item } from './interface';

export function groupByKey(items: Item[], field: string): Item {
  // write code here;
  const result: Item = {};

  items.forEach((item) => {
    if (item[field]) {
      const elem = String(item[field]);

      if (!result[elem]) {
        result[elem] = [];
        result[elem].push(item);
      } else {
        result[elem].push(item);
      }
    }
  });

  return result;
}
