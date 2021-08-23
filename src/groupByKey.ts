interface Item {
  [key: string]: any;
}

interface GroupedObjects {
  [key: string]: Item[]
}

export function groupByKey(items: Item[], field: keyof Item): GroupedObjects {
  const gropedObj: GroupedObjects = {};

  items.forEach((item: Item) => {
    if (!gropedObj[item[field]]) {
      gropedObj[item[field]] = [];
    }

    gropedObj[item[field]].push(item);
  });

  return gropedObj;
}
