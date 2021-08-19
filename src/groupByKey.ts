interface Item {
  [key: string]: any,
}

interface GroupedByKey {
  [key: string] : Item[],
}

export function groupByKey(items: Item[], field: keyof Item)
  : GroupedByKey {
  const resultObject: GroupedByKey = {};

  items.forEach((item: Item) => {
    if (item[field] in resultObject) {
      resultObject[item[field]].push(item);
    } else {
      resultObject[item[field]] = [item];
    }
  });

  return resultObject;
}
