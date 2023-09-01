type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], searchedKey: keyof T): GroupsMap<T> {
  const result: GroupsMap<T> = {};
  const searchedKeys = new Set(items.map((value) => value[searchedKey]));

  searchedKeys.forEach((key) => {
    result[key] = items.filter((item) => item[searchedKey] === key);
  });

  return result;
}
