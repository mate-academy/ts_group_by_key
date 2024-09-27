type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const sortedMap: GroupsMap<T> = {};

  items.forEach((item: T) => {
    const sortKey = String(item[key]);

    if (!sortedMap[sortKey]) {
      sortedMap[sortKey] = [];
    }

    sortedMap[sortKey].push(item);
  });

  return sortedMap;
}
