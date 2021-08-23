interface Item {
  [key: string]: any;
}

export function groupByKey<T, K extends keyof Item>(
  items: T[],
  field: K,
): Item {
  const resultObject: Item = {};

  items.forEach((item: Item) => {
    if (!resultObject[item[field]]) {
      resultObject[item[field]] = [];
    }

    resultObject[item[field]].push(item);
  });

  return resultObject;
}
