type GroupsMap<T> = {
  [key: string]: T[];
};

type Item = {
  [key: string]: any;
};

export function groupByKey(items: object[], key: string): GroupsMap<object> {
  const result: GroupsMap<object> = {};

  items.forEach((item: Item) => {
    if (!(item[key] in result)) {
      result[item[key]] = [];
    }

    result[item[key]].push(item);
  });

  return result;
}
