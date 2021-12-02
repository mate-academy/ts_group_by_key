type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T):GroupsMap<T> {
  const groupedObj: GroupsMap<T> = {};

  items.forEach((item) => {
    const value = String(item[key]);

    if (groupedObj[value]) {
      groupedObj[value].push(item);
    } else {
      groupedObj[value] = [item];
    }
  });

  return groupedObj;
}
