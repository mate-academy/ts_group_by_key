type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  return items.reduce<GroupsMap<T>>((groupsMap, item) => {
    const groups = groupsMap;
    const keyValue = item[key];

    if (typeof keyValue !== 'string' && typeof keyValue !== 'number') {
      throw new Error('Value of key should be string or number');
    }

    if (keyValue in groups) {
      groups[keyValue].push(item);
    } else {
      groups[keyValue] = [item];
    }

    return groupsMap;
  }, {});
}
