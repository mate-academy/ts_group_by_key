type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: string): GroupsMap<T> {
  const groups: GroupsMap<T> = {};

  for (const item of items) {
    const value = (item as Record<string, any>)[key];

    if (!groups[value]) {
      groups[value] = [];
    }
    groups[value].push(item);
  }

  return groups;
}
