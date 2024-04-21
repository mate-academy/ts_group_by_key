type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey(items, key): GroupsMap<typeof items> {
  const groupedItems: GroupsMap<typeof items> = {};

  for (const item of items) {
    const value = item[key];

    if (!groupedItems[value]) {
      groupedItems[value] = [];
    }

    groupedItems[value].push(item);
  }

  return groupedItems;
}
