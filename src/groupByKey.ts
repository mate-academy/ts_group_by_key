type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey <T>(items: T[], key: keyof T): GroupsMap<T> {
  const groupedObj: GroupsMap<T> = {};

  items.forEach((element) => {
    const filterKey = String(element[key]);

    if (!groupedObj[filterKey]) {
      groupedObj[filterKey] = [];
    }
    groupedObj[filterKey].push(element);
  });

  return groupedObj;
}
