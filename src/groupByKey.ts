type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<Item, T extends keyof Item>(
  items: Item[],
  key: T,
): GroupsMap<Item> {
  const groupedByKey: GroupsMap<Item> = {};

  items.forEach((item) => {
    const keyValue = item[key] as string;

    if (keyValue in groupedByKey) {
      groupedByKey[keyValue].push(item);
    } else {
      groupedByKey[keyValue] = [item];
    }
  });

  return groupedByKey;
}
