type GroupsMap<T> = {
  [key: string]: T[];
};

interface Item {
  'id': number,
  'color': string,
  'country': string,
}

export function groupByKey(
  items: Item[],
  key: keyof Item,
): GroupsMap<Item> {
  const result: GroupsMap<Item> = {};

  items.map((item: Item) => {
    if (!(Object.hasOwn(result, item[key]))) {
      result[item[key] as keyof typeof result] = [
        ...items.filter((itemFilter: Item) => itemFilter[key] === item[key]),
      ];
    }

    return undefined;
  });

  return result;
}
