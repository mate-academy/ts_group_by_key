// import { group } from "console";
interface Item {
  [key: string]: any;
}

export function groupByKey(items: Item[], field: keyof Item): Item {
  const sortArray: Item = {};

  items.forEach((item: Item) => {
    if (!sortArray[item[field]]) {
      sortArray[item[field]] = [item];
    } else {
      sortArray[item[field]].push(item);
    }
  });

  return sortArray;
}
