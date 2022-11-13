type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const groupedObject: GroupsMap<T> = {};

  items.forEach((item) => {
    const currentKey = String(item[key]);

    if (!groupedObject[currentKey]) {
      groupedObject[currentKey] = [];
    }

    groupedObject[currentKey].push(item);
  });

  return groupedObject;
}
