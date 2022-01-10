type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<Item>(
  items: Item[],
  key: keyof Item,
): GroupsMap<Item> {
  const groupMap: GroupsMap<Item> = {};

  items.forEach((item) => {
    const newKey: string = `${item[key]}`;

    if (groupMap[newKey]) {
      groupMap[newKey].push(item);
    } else {
      groupMap[newKey] = [item];
    }
  });

  return groupMap;
}
