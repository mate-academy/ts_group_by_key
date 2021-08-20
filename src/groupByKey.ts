interface Item {
  [key: string]: any;
}

export function groupByKey(items: Item[], field: keyof Item) :Item {
  const sortedArr: Item = {};

  for (let i: number = 0; i < items.length; i += 1) {
    const sortKey = items[i][field];

    if (!sortedArr[sortKey]) {
      sortedArr[sortKey] = [];
      sortedArr[sortKey].push(items[i]);
    } else {
      sortedArr[sortKey].push(items[i]);
    }
  }

  return sortedArr;
}
