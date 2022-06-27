type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const sorted: GroupsMap<T> = {};

  items.forEach((item) => {
    const value = String(item[key]);

    if (!sorted[value]) {
      sorted[value] = [];
    }

    sorted[value].push(item);
  });

  return sorted;
}
