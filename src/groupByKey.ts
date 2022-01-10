type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const groups: GroupsMap<T> = {};

  items.forEach((item) => {
    const itemKey = `${item[key]}`;

    if (Object.prototype.hasOwnProperty.call(groups, itemKey)) {
      groups[itemKey].push(item);
    } else {
      groups[itemKey] = [item];
    }
  });

  return groups;
}
