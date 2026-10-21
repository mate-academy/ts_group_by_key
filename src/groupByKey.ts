type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  return items.reduce((groups: GroupsMap<T>, item: T) => {
    const groupName = String(item[key]);

    if (!groups[groupName]) {
      groups[groupName] = [];
    }

    groups[groupName].push(item);

    return groups;
  }, {});
}
