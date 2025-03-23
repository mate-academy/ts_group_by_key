type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const groupedObj: GroupsMap<T> = {};

  for (let i: number = 0; i < items.length; i++) {
    const groupKey: string = String(items[i][key]);

    if (!groupedObj[groupKey]) {
      groupedObj[groupKey] = [];
    }

    groupedObj[groupKey].push(items[i]);
  }

  return groupedObj;
}
