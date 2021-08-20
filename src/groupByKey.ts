interface Item {
  [key: string]: any,
}

interface Grouped {
  [key: string]: Item[],
}

export function groupByKey(items: Item[], field: keyof Item): object {
  const groups: Grouped = {};

  items.forEach((item: Item) => {
    if (!groups[item[field]]) {
      groups[item[field]] = [];
    }

    groups[item[field]].push(item);
  });

  return groups;
}
