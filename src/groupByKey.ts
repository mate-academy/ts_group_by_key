type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const groups: GroupsMap<T> = {};

  items.forEach((item) => {
    const groupBy = String(item[key]);

    if (!groups[groupBy]) {
      groups[groupBy] = [];
    }

    groups[groupBy].push(item);
  });

  return groups;
}
