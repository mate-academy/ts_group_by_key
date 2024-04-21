type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T extends object>(
  items: T[],
  key: keyof T,
): GroupsMap<T> {
  return items.reduce((groupedMap, item) => {
    const keyValue: any = item[key];
    const keyString = String(keyValue);

    if (groupedMap[keyString]) {
      groupedMap[keyString].push(item);
    } else {
      groupedMap[keyString] = [item];
    }

    return groupedMap;
  }, {} as GroupsMap<T>);
}
