type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const groupedObj: GroupsMap<T> = {};

  items.forEach((item) => {
    const groupKey = item[key] as string;

    if (!(groupKey in groupedObj)) {
      groupedObj[groupKey] = [];
    }
    groupedObj[groupKey].push(item);
  });

  return groupedObj;
}
