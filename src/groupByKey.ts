interface Item {
  [key: string]: any,
}

type ItemsGroup<T> = {
  [key: string]: T[]
};

export function groupByKey(
  items: Item[],
  field: keyof Item,
): ItemsGroup<Item> {
  return items.reduce(
    (accumulator, item) => {
      const value = item[field];

      accumulator[value] = (accumulator[value] || []).concat(item);

      return accumulator;
    },
    {},
  );
}
