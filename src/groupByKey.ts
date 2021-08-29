interface Item {
  [key: string]: any;
}

interface NewItem {
  [key: string]: Item[];
}

export function groupByKey(items: Item[], field: keyof Item): NewItem {
  const resultObject: NewItem = {};

  items.forEach((item: Item) => {
    if (item[field] in resultObject) {
      resultObject[item[field]].push(item);
    } else {
      resultObject[item[field]] = [item];
    }
  });

  return resultObject;
}
