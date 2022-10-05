type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const groups: GroupsMap<T> = {};

  items.forEach((item) => {
    const keyInGroups = `${item[key]}`;

    if (!groups[keyInGroups]) {
      groups[keyInGroups] = [];
    }

    groups[keyInGroups].push(item);
  });

  return groups;
}
