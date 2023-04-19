type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  return items.reduce((groups: GroupsMap<T>, item: T) => {
    const value = String(item[key]);

    if (!groups[value]) {
      // eslint-disable-next-line no-param-reassign
      groups[value] = [];
    }

    groups[value].push(item);

    return groups;
  }, {});
}
