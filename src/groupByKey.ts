interface Item {
  [key: string]: any;
}

interface ResultKeys {
  [key: string]: Item[];
}

export function groupByKey(items: Item[], field: keyof Item): ResultKeys {
  // write code here;
  const result: ResultKeys = {};

  items.forEach((item: Item) => {
    if (!result[item[field]]) {
      result[item[field]] = [];
    }

    result[item[field]].push(item);
  });

  return result;
}
