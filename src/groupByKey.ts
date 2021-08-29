interface Item {
  [key: string]: any;
}

export function groupByKey(items: Item[], field: string): object {
  // write code here;
  const obj: object = {};

  items.forEach((element: Item) => {
    if (!obj[element[field]]) {
      obj[element[field]] = [];
    }
    obj[element[field]].push(field);
  });

  return obj;
}
