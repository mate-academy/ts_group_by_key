type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  return items.reduce<GroupsMap<T>>((groupsMap, item) => {
    const keyValue = item[key];

    if (typeof keyValue !== 'string' && typeof keyValue !== 'number') {
      throw new Error('Value of key should be string or number');
    }

    if (!(keyValue in groupsMap)) {
      // eslint-disable-next-line no-param-reassign
      groupsMap[keyValue] = [];
    }

    groupsMap[keyValue].push(item);

    return groupsMap;
  }, {});
}
