type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey(items: [], key: string): GroupsMap<Object> {
  const group: GroupsMap<Object> = {};

  items.forEach((item) => {
    const keys = item[key];

    if (!group[keys]) {
      group[keys] = [];
    }
    group[keys].push(item);
  });

  return group;
}
