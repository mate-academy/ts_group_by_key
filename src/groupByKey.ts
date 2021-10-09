interface Item {
  [key: string]: any;
}

export function groupByKey(items: Item[], field: keyof Item): Item {
  const result: Item = {};

  items.forEach((item) => {
    const modifiedKey = `${item[field]}`;

    if (result[modifiedKey]) {
      result[modifiedKey].push(item);
    } else {
      result[modifiedKey] = [item];
    }
  });

  return result;
}
