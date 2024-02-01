type GroupsMap<Item> = {
  [key: string]: Item[];
};

export function groupByKey<Item>(
  items: Item[],
  key: keyof Item,
): GroupsMap<Item> {
  const newObj: GroupsMap<Item> = {};

  items.forEach((item) => {
    const keyValue = item[key] as string;

    if (!newObj[keyValue]) {
      newObj[keyValue] = [item];
    } else {
      newObj[keyValue].push(item);
    }
  });

  return newObj;
}
