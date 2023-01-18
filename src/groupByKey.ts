type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T)
  : GroupsMap<T> {
  const groupedObj: GroupsMap<T> = {};

  items.forEach((obj) => {
    const keyValue: string = String(obj[key]);

    if (!(keyValue in groupedObj)) {
      groupedObj[keyValue] = [];
    }
    groupedObj[keyValue].push(obj);
  });

  return groupedObj;
}
