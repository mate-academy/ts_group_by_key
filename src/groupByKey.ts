type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const groupedObject: GroupsMap<T> = {};

  items.forEach((item: T) => {
    const value = String(item[key]);

    if (!groupedObject[value]) {
      groupedObject[value] = [];
    }

    groupedObject[value].push(item);
  });

  return groupedObject;
}
