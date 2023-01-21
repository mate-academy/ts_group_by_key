type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const groupedData: GroupsMap<T> = {};

  items.forEach((item) => {
    const groupKey = String(item[key]);

    if (!groupedData[groupKey]) {
      groupedData[groupKey] = [];
    }
    groupedData[groupKey].push(item);
  });

  return groupedData;
}
