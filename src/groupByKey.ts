type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<Item>(
  items: Item[],
  key: keyof Item,
): GroupsMap<Item> {
  const groupedCollection: GroupsMap<Item> = items.reduce(
    (prev: GroupsMap<Item>, item: Item) => {
      const newKey = String(item[key]);

      if (!prev.hasOwnProperty(newKey)) {
        prev[newKey] = [];
      }
      prev[newKey].push(item);

      return prev;
    },
    {},
  );

  return groupedCollection;
}
