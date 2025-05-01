type GroupsMap<T> = { [key: string]: T[] };

export function groupByKey<T extends object>(
  items: T[],
  key: keyof T,
): GroupsMap<T> {
  const groupedMap: GroupsMap<T> = {};

  for (const item of items) {
    const mapKey = String(item[key]);

    if (!Array.isArray(groupedMap[mapKey])) {
      groupedMap[mapKey] = [];
    }

    groupedMap[mapKey].push(item);
  }

  return groupedMap;
}
