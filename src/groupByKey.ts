type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T extends object>(
  items: T[],
  key: keyof T,
): GroupsMap<T> {
  const groupedMap: GroupsMap<T> = {};

  items.map((item) => {
    const keyValue: any = item[key];
    const keyString = String(keyValue);

    if (Object.prototype.hasOwnProperty.call(groupedMap, keyString)) {
      groupedMap[keyString].push(item);
    } else {
      groupedMap[keyString] = [item];
    }
  });

  return groupedMap;
}
