type GroupsMap<T> = Record<number | string, T[]>;

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  return items.reduce<GroupsMap<T>>((groupsMap, item) => {
    const grpmap = groupsMap;
    const keyValue = item[key];

    if (typeof keyValue !== 'string' && typeof keyValue !== 'number') {
      throw new Error('Value of key for grouping should have type string');
    }

    if (keyValue in grpmap) {
      grpmap[keyValue].push(item);
    } else {
      grpmap[keyValue] = [item];
    }

    return groupsMap;
  }, {});
}
