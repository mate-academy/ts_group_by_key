interface Item {
  [key: string]: any;
}

interface NewItem {
  [key: string]: Item[];
}

export function groupByKey(items: Item[], field: keyof Item): NewItem {
  const groupedObj: NewItem = {};

  items.forEach((item) => {
    if (!groupedObj[item[field]]) {
      groupedObj[item[field]] = [];
    }

    groupedObj[item[field]].push(item);
  });

  return groupedObj;
}
