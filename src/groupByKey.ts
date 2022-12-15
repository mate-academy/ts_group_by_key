type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const groupedObj: GroupsMap<T> = {};

  items.forEach((item) => {
    const itemValue = item[key];

    if (!groupedObj[`${itemValue}`]) {
      groupedObj[`${itemValue}`] = [];
    }

    groupedObj[`${itemValue}`].push(item);
  });

  return groupedObj;
}
