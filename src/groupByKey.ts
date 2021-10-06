interface Item {
  [key: string]: any;
}

type GroupsMap<T> = {
  [key:string]: T[];
};

export function groupByKey(items: Item[], key: keyof Item):GroupsMap<Item> {
  const groups: GroupsMap<Item> = {};

  items.forEach((obj) => {
    if (!Object.prototype.hasOwnProperty.call(groups, obj[key])) {
      groups[obj[key]] = [];
    }
    groups[obj[key]].push(obj);
  });

  return groups;
}
