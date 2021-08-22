interface Item {
  [key: string]: any;
}

export function groupByKey(items: Item[], field: string): Item {
  const result: Item = {};

  items.forEach((item: Item) => {
    if (!result[item[field]]) {
      result[item[field]] = [];
      result[item[field]].push(item);
    } else {
      result[item[field]].push(item);
    }
  });

  return result;
}
