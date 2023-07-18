type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const sortedObj: GroupsMap<T> = {};

  items.forEach((item) => {
    const itemKey = item[key];

    if (!sortedObj[itemKey]) {
      sortedObj[itemKey] = [];
    }
    sortedObj[itemKey].push(item);
  });

  return sortedObj;
}
