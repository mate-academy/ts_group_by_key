type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T extends object>(
  items: T[],
  key: keyof T,
): GroupsMap<T> {
  return items.reduce((groupedData: GroupsMap<T>, item) => {
    const valueOfKey = String(item[key]);

    if (!groupedData[valueOfKey]) {
      groupedData[valueOfKey] = [];
    }

    groupedData[valueOfKey].push(item);

    return groupedData;
  }, {});
}
