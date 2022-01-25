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
    const objProp = String(item[key]);

    if (objProp in res) {
      res[objProp].push(item);
    } else {
      res[objProp] = [item];
    }
  });

  return res;
}
