type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const groups: GroupsMap<T> = {};

  for (const item of items) {
    const value = item[key] as string | number;

    if (!groups[value]) {
      groups[value] = [];
    }
    groups[value].push(item);
  }

  return groups;
}
