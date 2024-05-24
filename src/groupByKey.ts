type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey(items: [], key: string): GroupsMap<string> {
  const itemsValuesOfKeys: string[] = [];
  const results: GroupsMap<string> = {};

  for (const item of items) {
    if (itemsValuesOfKeys.includes(item[key])) {
      continue;
    }
    itemsValuesOfKeys.push(item[key]);
  }

  for (const el of itemsValuesOfKeys) {
    const filtersItems = items.filter((item) => item[key] === el);

    results[el] = filtersItems;
  }

  return results;
}
