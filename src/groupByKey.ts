type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const groupedMap = items.reduce((acc: GroupsMap<T>, element) => {
    const valueOfKey = String(element[key]);

    if (valueOfKey in acc) {
      acc[valueOfKey].push(element);
    } else {
      acc[valueOfKey] = [element];
    }

    return acc;
  }, {});

  return groupedMap;
}
