interface Item {
  [key: string]: any;
}

type GroupsMap<T> = {
  [key:string]: T[];
};

export function groupByKey(items: Item[], key: keyof Item):GroupsMap<Item> {
  const groups: GroupsMap<Item> = {};

  items.forEach((item) => {
    const value = String(item[key]);

    if (!(value in groups)) {
      groups[value] = [];
    }

    groups[value].push(item);
  });

  return groups;
}
