type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const groupedObject: GroupsMap<T> = {};

  items.forEach((item) => {
    const keyValue = item[key] as string;

    if (!groupedObject[keyValue]) {
      groupedObject[keyValue] = [];
    }
    groupedObject[keyValue].push(item);
  });

  return groupedObject;
}
