type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const groupedObject: GroupsMap<T> = {};

  items.forEach((item: T) => {
    if (!groupedObject[item[key] as string]) {
      groupedObject[item[key] as string] = [];
    }

    groupedObject[item[key] as string].push(item);
  });

  return groupedObject;
}
