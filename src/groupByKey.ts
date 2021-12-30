type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey(items: object[], key: string): object {
  const keys: string[] = [];
  const result: GroupsMap<string> = {};

  items.forEach((item) => {
    if (!keys.includes(item[key])) {
      keys.push(item[key]);
    }
  });

  keys.forEach((oneKey) => {
    result[oneKey] = items.filter((a) => a[key] === oneKey);
  });

  return result;
}
