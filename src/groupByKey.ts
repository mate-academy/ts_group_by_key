type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const grouped: GroupsMap<T> = {};

  for (const item of items) {
    const value = item[key] as string;

    if (!grouped[value]) {
      grouped[value] = [];
    }
    grouped[value].push(item);
  }

  return grouped;
}
