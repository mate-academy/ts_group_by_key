interface Item {
  [key: string]: any;
}

interface ItemsGroup {
  [key: string]: Item[],
}

export function groupByKey(items: Item[], field: keyof Item): object {
  const resultObject: ItemsGroup = {};

  items.forEach((item: Item) => {
    if (!resultObject[item[field]]) {
      resultObject[item[field]] = [];
    }

    resultObject[item[field]].push(item);
  });

  return resultObject;
}
