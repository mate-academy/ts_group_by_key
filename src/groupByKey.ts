interface Item {
  [key: string]: any;
}

interface GroupedItems {
  [key: string]: Item[];
}

export function groupByKey(items: Item[], field: keyof Item): GroupedItems {
  const groupedByKey: GroupedItems = {};

  items.forEach((item) => {
    if (item[field] in groupedByKey) {
      groupedByKey[item[field]].push(item);
    } else {
      groupedByKey[item[field]] = [item];
    }
  });

  return groupedByKey;
}
