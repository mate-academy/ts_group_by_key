type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const groupedData: GroupsMap<T> = {};

  items.forEach((item) => {
    const groupBy = String(item[key]);

    if (!groupedData[groupBy]) {
      groupedData[groupBy] = [];
    }

    groupedData[groupBy].push(item);
  });

  return groupedData;
}
