type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  return items.reduce((groups: GroupsMap<T>, item) => {
    const groupKey = item[key];

    if (typeof groupKey === 'string' || typeof groupKey === 'number') {
      if (!groups[groupKey]) {
        groups[groupKey] = [];
      }
      groups[groupKey].push(item);
    }

    return groups;
  }, {});
}
