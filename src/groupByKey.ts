type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T extends object, K extends keyof T>(
  items: T[],
  key: K,
): GroupsMap<T> {
  return items.reduce((groups: GroupsMap<T>, item: T): GroupsMap<T> => {
    const groupKey: string = String(item[key]);

    if (groups === undefined || groups === null) {
      return groups;
    }

    if (!groups[groupKey]) {
      groups[groupKey] = [];
    }
    groups[groupKey].push(item);

    return groups;
  }, {});
}
