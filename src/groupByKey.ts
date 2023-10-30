type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const sortedData: GroupsMap<T> = {};

  items.forEach((item) => {
    const groupKey = String(item[key]);

    if (!sortedData[groupKey]) {
      sortedData[groupKey] = [];
    }

    sortedData[groupKey].push(item);
  });

  return sortedData;
}
