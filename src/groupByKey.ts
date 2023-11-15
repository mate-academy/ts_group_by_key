type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T):GroupsMap<T> {
  // write code here;
  const result: GroupsMap<T> = {};
  const distinct = [...items.map((item:T) => `${item[key]}`)];

  for (let i = 0; i < distinct.length; i += 1) {
    result[distinct[i]] = items.filter((item:T) => `${item[key]}`
    === distinct[i]);
  }

  return result;
}
