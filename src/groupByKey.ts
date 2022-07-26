type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const groupedObject: GroupsMap<T> = {};

  items.forEach((item) => {
    const sortKey = String(item[key]);

    if (!Object.prototype.hasOwnProperty.call(groupedObject, sortKey)) {
      groupedObject[sortKey] = [];
    }

    groupedObject[sortKey].push(item);
  });

  return groupedObject;
}
