type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const sortedGroups: GroupsMap<T> = {};

  items.forEach((item) => {
    const sortValue = item[key] as string;

    if (!sortedGroups[sortValue]) {
      sortedGroups[sortValue] = [];
    }

    sortedGroups[sortValue].push(item);
  });

  return sortedGroups;
}
