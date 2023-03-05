type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: string): GroupsMap<T> {
  const groups: GroupsMap<T> = {};

  items.forEach((item: T) => {
    const value = item[key];

    if (!Object.prototype.hasOwnProperty.call(groups, value)) {
      groups[value] = [];
    }
    groups[value].push(item);
  });

  return groups;
}
