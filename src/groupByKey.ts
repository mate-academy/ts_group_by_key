type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T extends Record<string, string | number>>(
  items: T[],
  key: keyof T,
): GroupsMap<T> {
  const result:GroupsMap<T> = {};

  items.forEach((element) => {
    result[element[key]] = [];
  });

  items.forEach((element) => result[element[key]].push(element));

  return result;
}
