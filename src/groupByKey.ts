type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey(items: [], key: string): GroupsMap<Object> {
  const group: GroupsMap<Object> = {};

  items.forEach((item) => {
    if (item[key]) {
      if (!group[item[key]]) {
        group[item[key]] = [];
      }
    }
    group[item[key]].push(item);
  });

  return group;
}
