type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<Item>(
  items: Item[],
  key: keyof Item,
): GroupsMap<Item> {
  const res: GroupsMap<Item> = {};

  items.forEach((item) => {
    const groupKey = `${item[key]}`;

    if (!res[groupKey]) {
      res[groupKey] = [];
    }

    res[groupKey].push(item);
  });

  return res;
}
