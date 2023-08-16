type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const groups: GroupsMap<T> = {};

  items.forEach((item) => {
    const value = item[key] as unknown as string;

    if (!groups[value]) {
      groups[value] = [];
    }
    groups[value].push(item);
  });

  return groups;
}
