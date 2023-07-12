type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const groupedObject: GroupsMap<T> = {};

  items.forEach((item) => {
    const keyValue = <string>item[key];

    if (groupedObject[keyValue]) {
      groupedObject[keyValue].push(item);
    } else {
      groupedObject[keyValue] = [item];
    }
  });

  return groupedObject;
}
