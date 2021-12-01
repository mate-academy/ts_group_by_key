type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const sortedGroup: GroupsMap<T> = {};

  items.forEach((item) => {
    const sortValue = String(item[key]);

    if (!sortedGroup[sortValue]) {
      sortedGroup[sortValue] = [];
    }

    sortedGroup[sortValue].push(item);
  });

  return sortedGroup;
}
