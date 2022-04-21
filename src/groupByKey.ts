type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: string): GroupsMap<T> {
  const groups: GroupsMap<T> = {};

  items.forEach((item: T) => {
    if (groups[item[key]]) {
      groups[item[key]].push(item);
    } else {
      groups[item[key]] = [item];
    }
  });

  return groups;
}
