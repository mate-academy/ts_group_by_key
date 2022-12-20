type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: string[],
  key: string): GroupsMap<T> {
  const groupItems: GroupsMap<T> = items.reduce((group, item) => {
    const position = key;
    const groups = group;

    groups[item[position]] = groups[item[position]] || [];

    (groups[item[position]]).push(item);

    return groups;
  }, {});

  return groupItems;
}
