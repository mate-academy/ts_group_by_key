type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const groupedObject: GroupsMap<T> = {};

  items.forEach((item) => {
    const objectValue = String(item[key]);

    if (!groupedObject[objectValue]) {
      groupedObject[objectValue] = [];
    }

    groupedObject[objectValue].push(item);
  });

  return groupedObject;
}
