type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const groupedData: GroupsMap<T> = {};

  items.forEach((item) => {
    const prop = String(item[key]);

    if (!groupedData[prop]) {
      groupedData[prop] = [];
    }

    groupedData[prop].push(item);
  });

  return groupedData;
}
