type GroupsMap<T> = {
  [key: string]: T[];
};

interface GroupableItem {
  [key: string]: any;
}

export function groupByKey<T extends GroupableItem>(
  items: T[],
  key: string,
): GroupsMap<T> {
  const groups: GroupsMap<T> = {};

  items.forEach((item) => {
    const groupKey = item[key];

    if (!groups[groupKey]) {
      groups[groupKey] = [];
    }
    groups[groupKey].push(item);
  });

  return groups;
}
