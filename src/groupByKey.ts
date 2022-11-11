type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const groupedObject: GroupsMap<T> = {};

  items.forEach((item) => {
    const one = String(item[key]);

    if (Object.prototype.hasOwnProperty.call(groupedObject, one)) {
      groupedObject[one].push(item);
    } else {
      groupedObject[one] = [item];
    }
  });

  return groupedObject;
}
