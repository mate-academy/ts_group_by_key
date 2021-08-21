interface Item {
  [key: string]: any;
}

interface GroupObjByKey {
  [key: string]: Item[];
}

export function groupByKey<T, K extends keyof Item>(
  items: T[],
  field: K,
): Item {
  const resultObject: GroupObjByKey = {};

  items.forEach((item: Item) => {
    if (!resultObject[item[field]]) {
      resultObject[item[field]] = [];
    }

    resultObject[item[field]].push(item);
  });

  return resultObject;
}
