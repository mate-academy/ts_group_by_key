type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey(items: [], key: string): GroupsMap<string> {
  const results: GroupsMap<string> = {};

  items.forEach((item) => {
    const filtersItems = items.filter((x) => x[key] === item[key]);

    if (!results[item[key]]) {
      results[item[key]] = filtersItems;
    }
  });

  return results;
}
