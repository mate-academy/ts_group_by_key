interface Item {
  [key: string]: any;
}

export function groupByKey(items: Array<Item>, field: keyof Item): Item {
  const obj: Item = {};

  items.forEach((item: Item) => {
    if (obj[item[field]]) {
      (obj[item[field]]).push(item);
    } else {
      (obj[item[field]]) = new Array(item);
    }
  });

  return obj;
}
