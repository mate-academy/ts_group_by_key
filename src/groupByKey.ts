interface Item {
  [key: string]: any;
}

export function groupByKey(items: Item[], field: keyof Item):Item {
  const resultList: Item = {};

  items.forEach((item: Item) => {
    if (item[field] in resultList) {
      resultList[item[field]].push(item);
    } else {
      resultList[item[field]] = [item];
    }
  });

  return resultList;
}
