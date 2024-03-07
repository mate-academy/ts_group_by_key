type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<Item extends Record<string, any>>(
  items: Item[],
  key: keyof Item,
): GroupsMap<Item> {
  const result: GroupsMap<Item> = {};
  const uniqueKeys: string[] = [];

  items.forEach((item) => {
    const itemKey = item[key] as string;

    if (!uniqueKeys.includes(itemKey)) {
      uniqueKeys.push(itemKey);
    }
  });

  uniqueKeys.forEach((el) => {
    result[el] = [];
  });

  items.forEach((item) => {
    result[item[key]].push(item);
  });

  return result;
}
