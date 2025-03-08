type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const groupedMap: GroupsMap<T> = {};

  for (const item of items) {
    const keyValue = String(item[key]);

    if (!groupedMap[keyValue]) {
      groupedMap[keyValue] = [];
    }

    groupedMap[keyValue].push(item);
  }

  return groupedMap;
}
