interface Item {
  [key: string]: any;
}

interface GroupObjByKey {
  [key: string]: Item[];
}

export function groupByKey(items: Item[], field: keyof Item): Item {
  const resultObject: GroupObjByKey = {};

  items.forEach((item: Item) => {
    if (!resultObject[item[field]]) {
      resultObject[item[field]] = [];
    }

    resultObject[item[field]].push(item);
  });

  return resultObject;
}
