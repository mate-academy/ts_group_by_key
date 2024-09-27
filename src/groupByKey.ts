type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const groupedObj: GroupsMap<T> = {};

  items.forEach((item: T) => {
    const keyValue = item[key] as string;

    groupedObj[keyValue] = groupedObj[keyValue] || [];

    groupedObj[keyValue].push(item);
  });

  return groupedObj;
}
