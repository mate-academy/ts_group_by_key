type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<Item>(items:Item[], key:keyof Item):GroupsMap<Item> {
  const obj:GroupsMap<Item> = {};
  const keys = [];

  items.forEach((el) => {
    if (!keys.includes(el[key])) {
      keys.push(el[key]);
    }
  });

  keys.forEach((element) => {
    obj[element] = items.filter((el) => el[key] === element);
  });

  return obj;
}
