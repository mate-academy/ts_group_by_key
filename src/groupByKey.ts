type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const groupedMap: GroupsMap<T> = {};

  items.forEach((item) => {
    const valueKey = String(item[key]);

    if (!(valueKey in groupedMap)) {
      groupedMap[valueKey] = [];
    }

    groupedMap[valueKey].push(item);
  });

  return groupedMap;
}
