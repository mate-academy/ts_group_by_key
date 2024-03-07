type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: [], key: string): GroupsMap<T> {
  const groups: GroupsMap<T> = {};

  items.forEach((item) => {
    if (!groups[item[key]]) {
      groups[item[key]] = [];
    }
    groups[item[key]].push(item);
  });

  return groups;
}
