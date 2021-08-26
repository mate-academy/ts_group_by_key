interface Item {
  [key: string]: any;
}

export function groupByKey(items: Item[], field: keyof Item): Item {
  const res: Item = {};

  items.forEach((element) => {
    if (!res[element[field]]) {
      res[element[field]] = [];
    }

    res[element[field]].push(element);
  });

  return res;
}
