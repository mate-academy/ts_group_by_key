interface Item {
  [key: string]: any;
}

interface FilterBy {
  [key: string]: Item[];
}

export function groupByKey(items: Item[], field: keyof Item): FilterBy {
  const filteredByKey: FilterBy = {};

  items.forEach((item) => {
    if (item[field] in filteredByKey) {
      filteredByKey[item[field]].push(item);
    } else {
      filteredByKey[item[field]] = [item];
    }
  });

  return filteredByKey;
}
