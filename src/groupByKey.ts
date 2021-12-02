type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<Item>(items:Item[], key:keyof Item):GroupsMap<Item> {
  const result:GroupsMap<Item> = {};

  items.forEach((item) => {
    const keys = String(item[key]);

    if (!result[keys]) {
      result[keys] = [];
    }
    result[keys].push(item);
  });

  return result;
}
