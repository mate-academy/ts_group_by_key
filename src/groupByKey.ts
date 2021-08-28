interface Item {
  [key: string]: any,
}

interface GroupItem {
  [key: string] : Item[],
}

export function groupByKey(items: Item[], field: keyof Item): GroupItem {
  const resultObject: GroupItem = {};

  items.forEach((item: Item) => {
    if (item[field] in resultObject) {
      resultObject[item[field]].push(item);
    } else {
      resultObject[item[field]] = [item];
    }
  });

  return resultObject;
}
