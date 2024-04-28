type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T extends object>(
  items: T[],
  key: keyof T,
): GroupsMap<T> {
  return items.reduce((groupedData: GroupsMap<T>, item) => {
    const valueOfKey: unknown = item[key];

    if (!groupedData[String(valueOfKey)]) {
      groupedData[String(valueOfKey)] = [];
    }

    groupedData[String(valueOfKey)].push(item);

    return groupedData;
  }, {});
}
