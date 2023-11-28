type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<Item>(
  items: Item[],
  key: keyof Item,
): GroupsMap<Item> {
  const groups: GroupsMap<Item> = {};

  items.forEach((item) => {
    const value = String(item[key]);

    if (value in groups) {
      groups[value].push(item);
    } else {
      groups[value] = [item];
    }
  });

  return groups;
}
