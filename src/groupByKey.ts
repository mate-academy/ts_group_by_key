interface Item {
  [key: string]: any;
}

export function groupByKey(items: Item[], field: keyof Item):Item {
  const sortedList: Item = {};

  items.forEach((item: Item) => {
    if (item[field] in sortedList) {
      sortedList[item[field]].push(item);
    } else {
      sortedList[item[field]] = [item];
    }
  });

  return sortedList;
}
