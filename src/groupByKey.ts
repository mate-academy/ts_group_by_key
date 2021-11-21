type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const groupedObj: GroupsMap<T> = {};

  items.forEach((item) => {
    const valueForGrouping = String(item[key]);

    if (groupedObj[valueForGrouping]) {
      groupedObj[valueForGrouping].push(item);
    } else {
      groupedObj[valueForGrouping] = [item];
    }
  });

  return groupedObj;
}
