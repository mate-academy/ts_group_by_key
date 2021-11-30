type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<Item>(items:Item[], key:keyof Item):GroupsMap<Item> {
  const obj:GroupsMap<Item> = {};

  items.forEach((item) => {
    const keyValue = String(item[key]);

    if (!obj[keyValue]) {
      obj[String(item[key])] = items.filter((el) => el[key] === item[key]);
    }
  });

  return obj;
}
