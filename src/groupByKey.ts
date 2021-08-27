interface Item {
  [key: string]: any;
}

export function groupByKey(items: Item[], field: keyof Item): Item {
  const result: Item = {};

  items.forEach((item: Item) => {
    if (!result[item[field]]) {
      result[item[field]] = [];
    }
    result[item[field]].push(item);
  });

  return result;
}
