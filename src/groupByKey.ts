interface Item {
  [key: string]: any;
}

export function groupByKey(items: Item[], field: keyof Item): Item {
  const resultObject: Item = {};

  items.forEach((obj: Item) => {
    if (!resultObject[obj[field]]) {
      resultObject[obj[field]] = [];
    }

    resultObject[obj[field]].push(obj);
  });

  return resultObject;
}
