type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const groupedObj: GroupsMap<T> = {};

  items.forEach((object) => {
    const value = String(object[key]);

    if (!groupedObj[value]) {
      groupedObj[value] = [];
    }

    groupedObj[value].push(object);
  });

  return groupedObj;
}
