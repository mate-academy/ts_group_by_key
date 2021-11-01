type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const groupedObject: GroupsMap<T> = {};

  items.forEach((item) => {
    const itemKey = item[key];

    if (!(String(itemKey) in groupedObject)) {
      groupedObject[String(itemKey)] = [];
    }
    groupedObject[String(itemKey)].push(item);
  });

  return groupedObject;
}
