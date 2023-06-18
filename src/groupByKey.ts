type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey(items: [], key: string): GroupsMap<object> {
  let obj: GroupsMap<object> = {};

  items.forEach((item) => {
    obj = {
      ...obj,
      [item[key]]: items.filter((e) => e[key] === item[key]),
    };
  });

  return obj;
}
