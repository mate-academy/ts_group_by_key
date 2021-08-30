interface Item {
  [key: string]: any,
}

interface Groups {
  [key: string]: Item[],
}

export function groupByKey(items: Item[], field: keyof Item): Groups {
  // write code here;
  const itemsGroupedByKey: Groups = {};

  items.forEach((element: Item) => {
    if (!itemsGroupedByKey[element[field]]) {
      itemsGroupedByKey[element[field]] = [];
    }
    itemsGroupedByKey[element[field]].push(element);
  });

  return itemsGroupedByKey;
}
