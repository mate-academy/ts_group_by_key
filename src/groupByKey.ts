type GroupsMap<T> = {
  [key: string]: T[];
};

type Key<T> = keyof T;

export function groupByKey<Item>(
  items: Item[],
  key: Key<Item>,
): GroupsMap<Item> {
  const res: GroupsMap<Item> = {};

  items.forEach((item: Item) => {
    if (item[key] in res) {
      res[item[key]].push(item);
    } else {
      res[item[key]] = [item];
    }
  });

  return res;
}
