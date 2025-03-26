type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const grouped: GroupsMap<T> = {};

  items.forEach((item) => {
    const keyToGroup = item[key] as unknown as string;

    if (!grouped[keyToGroup]) {
      grouped[keyToGroup] = [item];
    } else {
      grouped[keyToGroup].push(item);
    }
  });

  return grouped;
}
