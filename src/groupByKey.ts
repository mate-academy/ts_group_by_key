type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<Item>(items:Item[], key:keyof Item):GroupsMap<Item> {
  const obj:GroupsMap<Item> = {};
  // const keys = [];

  // items.forEach((el) => {
  //   if (!keys.includes(el[key])) {
  //     keys.push(el[key]);
  //   }
  // });

  items.forEach((item) => {
    const keyValue = String(item[key]);

    if (!obj[keyValue]) {
      obj[String(item[key])] = items.filter((el) => el[key] === item[key]);
    }
  });

  return obj;
}
