interface Item {
  [key: string]: any;
}

interface Result {
  [key: string]: Item[];
}

export function groupByKey(items: Item[], field: keyof Item): Result {
  // write code here;

  const result: Item = {};

  items.forEach((item: Item) => {
    if (!result[item[field]]) {
      result[item[field]] = [];
    }

    result[item[field]].push(item);
  });

  return result;
}
