type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey(items: [], key: string): GroupsMap<object> {
  const obj: GroupsMap<object> = {};

  items.forEach((item) => {
    const groupKey = item[key];

    obj[groupKey] = items.filter((e) => e[key] === groupKey);
  });

  return obj;
}
