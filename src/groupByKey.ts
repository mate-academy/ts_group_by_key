interface Item {
  [key: string]: any;
}

export function groupByKey(items: Item[], field: string): object {
  const finalArray: Item = {};

  items.forEach((x: Item) => {
    if (!finalArray[x[field]]) {
      finalArray[x[field]] = [];
    }

    finalArray[x[field]].push(x);
  });

  return finalArray;
}
