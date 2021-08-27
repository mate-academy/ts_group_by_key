interface Item {
  [key: string]: any;
}

interface FilterBy {
  [key: string]: Item[];
}

export function groupByKey(items: Item[], field: keyof Item): FilterBy {
  const filteredByKey: FilterBy = {};

  for (let i: number = 0; i < items.length; i += 1) {
    if (items[i][field] in filteredByKey) {
      filteredByKey[items[i][field]].push(items[i]);
    } else {
      filteredByKey[items[i][field]] = [items[i]];
    }
  }

  return filteredByKey;
}
