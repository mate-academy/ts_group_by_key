type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const groups: GroupsMap<T> = {};

  items.forEach((item) => {
    const keyGroup = String(item[key]);

    if (!groups[keyGroup]) {
      groups[keyGroup] = [];
    }

    groups[keyGroup].push(item);
  });

  return groups;
}
