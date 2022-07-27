type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey(items: object[], key: string): GroupsMap<object> {
  const values = [];
  const obj: GroupsMap<object> = {};

  for (let i = 0; i < items.length; i += 1) {
    if (!values.includes(items[i][key])) {
      values.push(items[i][key]);
    }
  }

  for (let i = 0; i < values.length; i += 1) {
    obj[values[i]] = [];
  }

  items.forEach((item) => obj[item[key]].push(item));

  return obj;
}
