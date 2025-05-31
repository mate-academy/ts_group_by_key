type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey(items: any[], key: string): GroupsMap<any> {
  const groups: GroupsMap<any> = {};

  items.forEach((item) => {
    const value = item[key];

    groups[value] = groups[value] || [];
    groups[value].push(item);
  });

  return groups;
}
