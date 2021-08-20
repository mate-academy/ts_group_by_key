interface Item {
  [key: string]: any;
}
interface Group {
  [key: string]: Item[];
}

export function groupByKey(items: Item[], field: keyof Item): Group {
  // write code here;
  const result: Group = {};

  items.forEach((item: Item) => {
    if (item[field] in result) {
      result[item[field]].push(item);
    } else {
      result[item[field]] = [item];
    }
  });

  return result;
}
