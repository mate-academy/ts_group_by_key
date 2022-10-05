type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const group: GroupsMap<T> = {};

  items.forEach((item) => {
    const currentKey = `${(item[key])}`;

    if (!group[currentKey]) {
      group[currentKey] = [];
    }

    group[currentKey].push(item);
  });

  return group;
}
