type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey(items: string[], key: number): GroupsMap<string> {
  const group: GroupsMap<string> = {};

  items.forEach((item) => {
    const k = item[key];

    if (!group[k]) {
      group[k] = [];
    }

    group[k].push(item);
  });

  return group;
}
