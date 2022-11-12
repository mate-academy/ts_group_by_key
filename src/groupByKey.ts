type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const groupedObj: GroupsMap<T> = {};

  for (let i: number = 0; i < items.length; i += 1) {
    const keyValue = String(items[i][key]);

    if (!groupedObj[keyValue]) {
      groupedObj[keyValue] = [];
    }
    groupedObj[keyValue].push(items[i]);
  }

  return groupedObj;
}
