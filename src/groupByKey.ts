type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<Item>(
  items: Item[],
  key: keyof Item,
): GroupsMap<Item> {
  const result: GroupsMap<Item> = {};

  items.forEach((item) => {
    if (!result[String(item[key])]) {
      result[String(item[key])] = [
        ...items.filter((itemFilter) => itemFilter[key] === item[key]),
      ];
    }
  });

  return result;
}
