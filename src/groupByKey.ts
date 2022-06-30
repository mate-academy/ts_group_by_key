type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T):
GroupsMap<T> {
  const groupedObj: GroupsMap<T> = {};

  items.forEach((item) => {
    const value = String(item[key]);

    if (!groupedObj[value]) {
      groupedObj[value] = [item];
    } else {
      groupedObj[value].push(item);
    }
  });

  return groupedObj;
}
