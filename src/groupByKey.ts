type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: string): GroupsMap<T> {
  const groupedObject: GroupsMap<T> = {};

  items.forEach((item: T) => {
    if (groupedObject[item[key]] === undefined) {
      groupedObject[item[key]] = [];
    }
    groupedObject[item[key]].push(item);
  });

  return groupedObject;
}
