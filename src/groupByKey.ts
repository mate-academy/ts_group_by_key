type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const groupedObj: GroupsMap<T> = {};

  items.forEach((item) => {
    const itemKey = String(item[key]);

    if (groupedObj[itemKey]) {
      groupedObj[itemKey].push(item);
    } else {
      groupedObj[itemKey] = [item];
    }
  });

  return groupedObj;
}
