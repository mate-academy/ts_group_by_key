type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const grouped: GroupsMap<T> = {};

  items.forEach((item: T) => {
    const currValue = item[key];

    if (!grouped[currValue]) {
      grouped[currValue] = [];
    }
    grouped[currValue].push(item);
  });

  return grouped;
}
