type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  return items.reduce<GroupsMap<T>>((groups, item) => {
    const keyValue = item[key];
    const groupsMap = { ...groups };

    if (typeof keyValue !== 'string' && typeof keyValue !== 'number') {
      throw new Error('Value of key for grouping should have type string');
    }

    if (keyValue in groupsMap) {
      groupsMap[keyValue].push(item);
    } else {
      groupsMap[keyValue] = [item];
    }

    return groupsMap;
  }, {});
}
