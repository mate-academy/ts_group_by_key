type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof {}): GroupsMap<T> {
  const groupedObject: GroupsMap<T> = {};

  items.forEach((item) => {
    if (!groupedObject[item[key]]) {
      groupedObject[item[key]] = [];
    }
    groupedObject[item[key]].push(item);
  });

  return groupedObject;
}
