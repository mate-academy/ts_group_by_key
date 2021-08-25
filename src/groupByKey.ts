interface Item {
  [key: string]: any;
}

export function groupByKey(items: Item[], field: keyof Item) :Item {
  const sortedArr: Item = {};

  items.forEach((item: Item) => {
    const sortKey = item[field];

    if (!sortedArr[sortKey]) {
      sortedArr[sortKey] = [];
    }
    sortedArr[sortKey].push(item);
  });

  return sortedArr;
}
