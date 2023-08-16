type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey(
  items: object[],
  key: keyof object,
): GroupsMap<object> {
  const keys = Array.from(new Set(items.map((element) => element[key])));

  return keys
    .reduce((acc: GroupsMap<object>, k: keyof object): GroupsMap<object> => {
      acc[k] = items.filter((element) => element[key] === k);

      return acc;
    }, {});
}
