interface Item {
  [key: string]: any;
}

export function groupByKey(items: any[], field: string): Item {
  const newObj: Item = {};

  items.forEach((element) => {
    newObj[element[field]] = [];
  });

  items.forEach((item) => {
    Object.keys(newObj).forEach((element) => {
      if (typeof +element === 'number' && +element === item[field]) {
        newObj[item[field]].push(item);
      }

      if (element === item[field]) {
        newObj[item[field]].push(item);
      }
    });
  });

  return newObj;
}
