type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: [], key: keyof T[]): GroupsMap<T> {
  const keys: string | number[] = [];

  items.forEach((item) => (!keys.includes(item[key]) && keys.push(item[key])));

  const result: GroupsMap<T> = {};

  keys.map((k) => (result[k] = items.filter((el) => el[key] === k)));

  return result;
}
