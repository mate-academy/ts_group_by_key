type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const groupedKeys: GroupsMap<T> = {};

  items.forEach((item) => {
    const group = `${item[key]}`;

    if (!groupedKeys[group]) {
      groupedKeys[group] = [];
    }

    groupedKeys[group].push(item);
  });

  return groupedKeys;
}
