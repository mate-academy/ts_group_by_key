interface Item {
  [key: string]: any;
}

type Answer = Record<keyof Item, Item[]>;

export function groupByKey<Items>(items: Items[], field: keyof Item): Answer {
  // write code here;
  const groupedItems: Answer = {};

  items.forEach((item: Item): void => {
    if (groupedItems[item[field]]) {
      groupedItems[item[field]].push(item);
    } else {
      groupedItems[item[field]] = [item];
    }
  });

  return groupedItems;
}
