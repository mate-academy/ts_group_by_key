interface Item {
  [key: string]: any;
}

interface SortItem {
  [key: string]: Item[];
}

export function groupByKey(items: Item[], field: keyof Item): SortItem {
  const sortByKey: Item = { };

  items.forEach((element: Item) => {
    if (!sortByKey[element[field]]) {
      sortByKey[element[field]] = [];
    }

    sortByKey[element[field]].push(element);
  });

  return sortByKey;
}
