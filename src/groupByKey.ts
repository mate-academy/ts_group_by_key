interface Item {
  [key: string] : any,
}

interface GroupedItems {
  [key: string] : Item[],
}

export function groupByKey(items: Item[], field: keyof Item):GroupedItems {
  const resultList: GroupedItems = {};

  items.forEach((item: Item) => {
    if (item[field] in resultList) {
      resultList[item[field]].push(item);
    } else {
      resultList[item[field]] = [item];
    }
  });

  return resultList;
}
