type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const groupedObject: GroupsMap<T> = {};

  for (let i = 0; i < items.length; i += 1) {
    if (!groupedObject[String(items[i][key])]) {
      groupedObject[String(items[i][key])] = [];
    }
    groupedObject[String(items[i][key])].push(items[i]);
  }

  return groupedObject;
}
