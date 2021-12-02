type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const groupedObject: GroupsMap<T> = {};

  items.forEach((item) => {
    const keyForGroup = String(item[key]);

    if (!(groupedObject[keyForGroup])) {
      groupedObject[keyForGroup] = [];
    }

    groupedObject[keyForGroup].push(item);
  });

  return groupedObject;
}
