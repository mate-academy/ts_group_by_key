type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T[]): GroupsMap<T> {
  const keys: string| number[] = [];

  items.map((item) => (keys.includes(item[key])
    ? null
    : keys.push(item[key])));

  const result = {};

  keys.map((k) => (result[k] = items.filter((el) => el[key] === k)));

  return result;
}
