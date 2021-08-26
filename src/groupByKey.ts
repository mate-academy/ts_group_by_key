interface Item {
  [key: string]: any;
}

interface Groups {
  [key: string]: Item[];
}

export function groupByKey(items: Item[], field: keyof Item): Groups {
  const result: Groups = {};

  items.forEach((item: Item) => {
    if (item[field] in result) {
      result[item[field]].push(item);
    } else {
      result[item[field]] = [item];
    }
  });

  return result;
}
