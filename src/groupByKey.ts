type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<Item>(
  items: Item[],
  key: keyof Item,
): GroupsMap<Item> {
  const result: GroupsMap<Item> = {};

  items.forEach((item) => {
    const value = String(item[key]);

    if (!(value in result)) {
      result[value] = [];
    }

    result[value].push(item);
  });

  return result;
}
