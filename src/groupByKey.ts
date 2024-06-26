type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey(items: [], key: string): GroupsMap<string> {
  const result: GroupsMap<string> = {};

  items.forEach((item) => {
    const itemFilter = items.filter((a) => a[key] === item[key]);

    if (!result[item[key]]) {
      result[item[key]] = itemFilter;
    }
  });

  return result;
}
