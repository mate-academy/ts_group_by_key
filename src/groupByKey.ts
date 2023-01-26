type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  return items.reduce((group: GroupsMap<T>, item) => {
    const itemKey = String(item[key]);

    if (!group[itemKey]) {
      // eslint-disable-next-line no-param-reassign
      group[itemKey] = [];
    }

    group[itemKey].push(item);

    return group;
  }, {});
}
