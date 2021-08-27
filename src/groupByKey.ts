interface Item {
  [key: string]: any;
}

interface GroupedItems<T> {
  [key: string]: T[]
}

export function groupByKey(
  items: Item[], field: keyof Item,
): GroupedItems<Item> {
  const checked: GroupedItems<Item> = {};

  items.forEach((item: Item) => {
    if (item[field] in checked) {
      checked[item[field]].push(item);
    } else {
      checked[item[field]] = [item];
    }
  });

  return checked;
}
