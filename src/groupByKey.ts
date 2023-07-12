type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey(items: [], key: string): GroupsMap<object> {
  const result: GroupsMap<object> = {};

  for (let i = 0; i < items.length; i += 1) {
    const item = items[i];
    const keyForResult = item[key];

    if (result[keyForResult] === undefined) {
      result[keyForResult] = [];
    }

    if (item[key] === keyForResult) {
      result[keyForResult].push(item);
    }
  }

  return result;
}
