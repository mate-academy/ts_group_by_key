type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const groupedObject: GroupsMap<T> = {};

  items.forEach((item) => {
    const groupedByValue = String(item[key]);

    if (!groupedObject[groupedByValue]) {
      groupedObject[groupedByValue] = [];
    }

    groupedObject[groupedByValue].push(item);
  });

  return groupedObject;
}
