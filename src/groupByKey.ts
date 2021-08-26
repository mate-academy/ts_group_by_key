interface Item {
  [key: string]: string | number;
}

interface Grouped {
  [key: string]: Item[];
}

export function groupByKey(items: Item[], field: keyof Item): Grouped {
  const result: Grouped = {};

  items.forEach((item: Item) => {
    if (item[field] in result) {
      result[item[field]].push(item);
    } else {
      result[item[field]] = [item];
    }
  });

  return result;
}
