export function groupByKey<T>(items: T[], key: keyof T): object {
  const groupsMap = items.reduce((map, item) => {
    const keyValue = item[key];
    const newGroup = map.get(keyValue);

    if (newGroup) {
      newGroup.push(item);
    } else {
      map.set(keyValue, [item]);
    }

    return map;
  }, new Map<any, T[]>());

  const groups: Record<string, T[]> = {};

  groupsMap.forEach((group, b) => {
    groups[b] = group;
  });

  return groups;
}
