type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey(items, key): GroupsMap<(typeof items)[number]> {
  const groups: GroupsMap<(typeof items)[number]> = {};

  items.forEach((item) => {
    const groupKey = item[key];

    if (!groups[groupKey]) {
      groups[groupKey] = [];
    }
    groups[groupKey].push(item);
  });

  return groups;
}
