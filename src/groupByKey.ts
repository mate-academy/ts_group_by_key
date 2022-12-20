type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T):GroupsMap<T> {
  const groupByObject:GroupsMap<T> = {};

  items.forEach((item) => {
    const myKey = String(item[key]);

    if (!(myKey in groupByObject)) {
      groupByObject[myKey] = [];
    }

    groupByObject[myKey].push(item);
  });

  return groupByObject;
}
