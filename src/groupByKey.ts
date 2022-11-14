type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const groupedObj: GroupsMap<T> = {};

  items.forEach((item: T) => {
    const value = (item[key]).toString();

    if (!Object.prototype.hasOwnProperty.call(groupedObj, value)) {
      groupedObj[value] = [];
    }
    groupedObj[value].push(item);
  });

  return groupedObj;
}
