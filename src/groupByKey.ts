interface Item {
  [key: string]: any;
}

export function groupByKey(items: Item[], field: string): object {
  // write code here;
  const obj: Item = {};

  items.forEach((element: Item) => {
    if (!obj[element[field]]) {
      obj[element[field]] = [];
    }
    obj[element[field]].push(field);
  });

  return obj;
}
