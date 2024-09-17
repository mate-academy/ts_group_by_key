type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const groupedObject: GroupsMap<T> = {};

  items.forEach((item: T) => {
    const stringifyKey = String(item[key]);

    if (stringifyKey in groupedObject) {
      groupedObject[stringifyKey].push(item);
    } else {
      groupedObject[stringifyKey] = [item];
    }
  });

  return groupedObject;
}
