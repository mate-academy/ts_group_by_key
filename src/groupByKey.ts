interface Item {
  [key: string]: any;
}

export function groupByKey(items: Item[], field: string): Item {
  const newGroup: Item = {};

  items.forEach((item) => {
    if (item[field] in newGroup) {
      newGroup[item[field]].push(item);
    } else {
      newGroup[item[field]] = [item];
    }
  });

  return newGroup;
}
