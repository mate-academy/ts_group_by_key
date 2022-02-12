type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const groupedObject: GroupsMap<T> = {};

  items.forEach((item) => {
    const resultKey = `${item[key]}`;

    if (!(resultKey in groupedObject)) {
      groupedObject[resultKey] = [];
    }

    groupedObject[resultKey].push(item);
  });

  return groupedObject;
}
