interface Obj {}

interface Item {
  [key: string]: Obj[];
}

export function groupByKey(items: Obj, field: string): Item {
  const result: Item = {};

  items.forEach((item) => {
    if (!result[item[field]]) {
      result[item[field]] = [];
    }

    result[item[field]].push(item);
  });

  return result;
}
