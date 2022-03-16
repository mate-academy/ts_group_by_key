type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const sortedObj: GroupsMap<T> = {};

  items.forEach((item) => {
    const itemKey = String(item[key]);

    if (sortedObj[itemKey]) {
      sortedObj[itemKey].push(item);
    } else {
      sortedObj[itemKey] = [item];
    }
  });

  return sortedObj;
}
