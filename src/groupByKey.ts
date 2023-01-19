type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const groupedObject: GroupsMap<T> = {};

  items.forEach((item) => {
    const groupName = String(item[key]);

    if (groupName in groupedObject) {
      groupedObject[groupName].push(item);
    } else {
      groupedObject[groupName] = [item];
    }
  });

  return groupedObject;
}
