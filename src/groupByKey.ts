type GroupsMap<T> = {
  [key: string]: T[];
};

type Item = {
  [key: string]: string | number | boolean | number[];
};

export function groupByKey(items: Item[], key: keyof Item): GroupsMap<Item> {
  return items.reduce((acc: GroupsMap<Item>, item: Item) => {
    const groupBy = `${item[key]}`;

    acc[groupBy] = (acc[groupBy] || []).concat(item);

    return acc;
  }, {});
}
