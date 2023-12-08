type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<Item, T extends keyof Item>(
  items: Item[],
  key: T,
): GroupsMap<Item> {
  const result: GroupsMap<Item> = {};
  const keyValue = key as string;

  items.forEach((item: Item) => {
    if (!result[item[keyValue]]) {
      result[item[keyValue]] = [];
    }

    result[item[keyValue]].push(item);
  });

  return result;
}
