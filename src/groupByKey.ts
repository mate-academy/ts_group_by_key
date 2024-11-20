type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const result = items.reduce((groupedByValues: GroupsMap<T>, item: T) => {
    const groupKey = String(item[key]);

    if (!groupedByValues[groupKey]) {
      groupedByValues[groupKey] = [];
    }
    groupedByValues[groupKey].push(item);

    return groupedByValues;
  }, {});

  return result;
}
