interface Item {
  [key: string]: string | number | boolean | number[];
}

interface GroupsMap<T> {
  [key: string]: T[];
}

export function groupByKey(items: Item[], key: keyof Item): GroupsMap<Item> {
  return items.reduce((acc: GroupsMap<Item>, item: Item) => {
    const newKey = `${item[key]}`;

    acc[newKey] = (acc[newKey] || []).concat(item);

    return acc;
  }, {});
}
