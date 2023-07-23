type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const sorted: GroupsMap<T> = {};

  items.forEach((item) => {
    const sortedKey = item[key];

    if (!sorted[sortedKey]) {
      sorted[sortedKey] = [];
    }
    sorted[sortedKey].push(item);
  });

  return sorted;
}
