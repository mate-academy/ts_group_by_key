type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const grouped: GroupsMap<T> = {};

  items.forEach((item) => {
    const groupsBy = String(item[key]);

    if (!grouped[groupsBy]) {
      grouped[groupsBy] = [];
    }

    grouped[groupsBy].push(item);
  });

  return grouped;
}
