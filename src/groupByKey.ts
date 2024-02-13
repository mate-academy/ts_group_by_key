type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const groups: GroupsMap<T> = {};

  // eslint-disable-next-line no-restricted-syntax
  for (const item of items) {
    const itemKey = String(item[key]);

    if (!groups[itemKey]) {
      groups[itemKey] = [];
    }

    groups[itemKey].push(item);
  }

  return groups;
}
