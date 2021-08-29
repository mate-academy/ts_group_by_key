interface Item {
  [key: string]: any;
}

interface Grouped {
  [key: string]: Item[],
}

export function groupByKey(items: Item[], field: keyof Item): Grouped {
  const groupResult: Grouped = {};

  items.forEach((item: Item) => {
    if (!groupResult[item[field]]) {
      groupResult[item[field]] = [];
    }

    groupResult[item[field]].push(item);
  });

  return groupResult;
}
