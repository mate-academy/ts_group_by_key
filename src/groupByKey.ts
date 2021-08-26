interface Item {
  [key: string]: any;
}

interface Group {
  [key: string]: Item;
}

export function groupByKey(items: Item[], field: keyof Item): object {
  const group: Group = {};

  items.forEach((element: Item) => {
    if (group[element[field]] === undefined) {
      group[element[field]] = [];
    }

    group[element[field]].push(element);
  });

  return group;
}
