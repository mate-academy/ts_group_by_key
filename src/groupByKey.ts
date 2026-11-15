type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  return items.reduce<GroupsMap<T>>((groups, item) => {
    const groupKey = String(item[key]);

    if (!Object.prototype.hasOwnProperty.call(groups, groupKey)) {
      groups[groupKey] = [];
    }

    groups[groupKey].push(item);

    return groups;
  }, {});
}
