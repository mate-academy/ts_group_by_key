type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const sortedByGroups: GroupsMap<T> = {};

  items.forEach((item: T) => {
    const sortedKey = String(item[key]);

    if (!sortedByGroups[sortedKey]) {
      sortedByGroups[sortedKey] = [];
    }

    sortedByGroups[sortedKey].push(item);
  });

  return sortedByGroups;
}
