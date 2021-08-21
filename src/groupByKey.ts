export interface Item {
  [key: string]: any;
}

export function groupByKey(items: Array<Item>, field: keyof Item): Item {
  return items.reduce((x, y) => {
    const result = {
      ...x,
    };

    result[y[field]] = items.filter((item) => item[field] === y[field]);

    return result;
  }, {});
}
