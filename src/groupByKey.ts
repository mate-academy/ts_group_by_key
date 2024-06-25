type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const groupedKey: GroupsMap<T> = {};
  const values = items
    .map((item) => item[key])
    .filter((item, index, arr) => arr.indexOf(item) === index);

  for (const value of values) {
    groupedKey[String(value)] = items.filter((item) => item[key] === value);
  }

  return groupedKey;
}
