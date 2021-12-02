type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T[]): GroupsMap<T> {
  const grouped: GroupsMap<T> = {};

  items.forEach((item) => {
    const strItem = String(item[key]);

    if (grouped[strItem]) {
      grouped[strItem].push(item);
    } else {
      grouped[strItem] = [item];
    }
  });

  return grouped;
}
