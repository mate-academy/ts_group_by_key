type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const group: GroupsMap<T> = {};

  items.forEach((item) => {
    const valueOfKey = String(item[key]);

    if (!Object.keys(group).includes(valueOfKey)) {
      group[valueOfKey] = [];
    }

    group[valueOfKey].push(item);
  });

  return group;
}
