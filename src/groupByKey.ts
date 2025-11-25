type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T, K extends keyof T>(
  items: Array<T>,
  key: K,
): GroupsMap<T> {
  return items.reduce<GroupsMap<T>>((groups, item) => {
    const groupKey: string = String(item[key]);

    if (!groups[groupKey]) {
      groups[groupKey] = [];
    }

    groups[groupKey].push(item);

    return groups;
  }, {});
}
