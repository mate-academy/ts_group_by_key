type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<Item>(
  items: Item[],
  key: keyof Item,
): GroupsMap<Item> {
  const newObj: GroupsMap<Item> = {};

  for (let i = 0; i < items.length; i += 1) {
    const currentItem = items[i];
    const keyValue = currentItem[key] as string;

    if (!newObj[keyValue]) {
      newObj[keyValue] = items.filter((item) => item[key] === keyValue);
    }
  }

  return newObj;
}
