interface Item {
  [key: string]: any;
}

export function groupByKey(items: Item[], key: keyof Item): Item {
  const groupedObject: Item = {};

  items.forEach((item) => {
    if (!groupedObject[item[key]]) {
      groupedObject[item[key]] = [];
    }
    groupedObject[item[key]].push(item);
  });

  return groupedObject;
}
