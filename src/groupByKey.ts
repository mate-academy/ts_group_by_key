export interface GroupsMap<T> {
  [key: string]: T[];
}

export type KeyTypes = string | number;

export interface Item {
  [key: string]: KeyTypes;
}

export function groupByKey(items: Item[], key: keyof Item): GroupsMap<Item> {
  const newKeys: KeyTypes[] = [];

  items.forEach((item: Item) => {
    if (!newKeys.includes(item[key])) {
      newKeys.push(item[key]);
    }
  });

  return newKeys.reduce((prev: GroupsMap<Item>, newKey: KeyTypes) => ({
    ...prev,
    [newKey]: items.filter((item: Item) => item[key] === newKey),
  }), {});
}
