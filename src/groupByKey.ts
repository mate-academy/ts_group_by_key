interface Item {
  [key: string]: any;
}

export function groupByKey(items: Item[], field: string): Item {
  const arrFieldsValues = items
    .map((item) => item[field])
    .filter((i, n) => !items.includes(i, n + 1));

  const result: Item = {};

  arrFieldsValues.forEach((elem) => {
    result[elem] = items.filter((item) => item[field] === elem);
  });

  return result;
}
