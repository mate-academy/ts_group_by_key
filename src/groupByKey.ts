interface Item {
  [key: string]: any;
}

export function groupByKey(items:Item, field: string): Item {
  const result: Item = {};

  for (let i = 0; i < items.length; i += 1) {
    if (result[items[i][field]]) {
      result[items[i][field]].push(items[i]);
    } else {
      result[items[i][field]] = [items[i]];
    }
  }

  return result;
}
