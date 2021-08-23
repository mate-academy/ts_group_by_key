interface Item {
  [key: string]: any;
}

export function groupByKey(items: Item[], field: string): Item {
  // write code here;
  const result: Item = {};

  items.forEach((info) => {
    if (result[info[field]] === undefined) {
      result[info[field]] = [info];
    } else {
      result[info[field]].push(info);
    }
  });

  return result;
}
