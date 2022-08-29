type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const groupedObject: GroupsMap<T> = {};

  items.forEach((item) => {
    const itemKey = String(item[key]);

    if (!groupedObject[itemKey]) {
      groupedObject[itemKey] = [];
    }

    groupedObject[itemKey].push(item);
  });

  return groupedObject;
}
