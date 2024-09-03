type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const groupedData: GroupsMap<T> = {};

  items.forEach((item) => {
    const value = String(item[key]);

    if (!groupedData[value]) {
      groupedData[value] = [];
    }

    groupedData[value].push(item);
  });

  return groupedData;
}
