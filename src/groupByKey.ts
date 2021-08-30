interface Item {
  [key: string]: any;
}

type ObjectsItem = {
  [key: string]: Item[]
};

export function groupByKey(items: Item[], field: keyof Item): ObjectsItem {
  const objectsList: ObjectsItem = {};

  for (let i: number = 0; i < items.length; i += 1) {
    if (!objectsList[items[i][field]]) {
      objectsList[items[i][field]] = [];
    }

    objectsList[items[i][field]].push(items[i]);
  }

  return objectsList;
}
