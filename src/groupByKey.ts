type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const grouped: GroupsMap<T> = {};

  items.forEach((item) => {
    const keyOfItem: string = String(item[key]);

    if (grouped[keyOfItem]) {
      grouped[keyOfItem].push(item);
    } else {
      grouped[keyOfItem] = [item];
    }
  });

  return grouped;
}
