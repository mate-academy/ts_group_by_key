interface Item {
  [key: string]: any,
}

type ItemsGroup<Type> = {
  [key: string]: Type[]
};

export const groupByKey = (
  items: Item[],
  field: keyof Item,
): ItemsGroup<Item> => Object
  .fromEntries(Array.from(new Set(items.map((item) => item[field])))
    .map((key) => [key, items.filter((item) => item[field] === key)]));
