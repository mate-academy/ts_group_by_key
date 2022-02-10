type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<Item>(
  items: Item[],
  key: keyof Item,
): GroupsMap<Item> {
  const groupedItems: GroupsMap<Item> = {};

  items.forEach((item) => {
    const currentKey = `${item[key]}`;

    if (!groupedItems[currentKey]) {
      groupedItems[currentKey] = [];
    }

    groupedItems[currentKey].push(item);
  });

  return groupedItems;
}
