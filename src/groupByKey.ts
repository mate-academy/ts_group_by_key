type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T):GroupsMap<T> {
  const groupByObject:GroupsMap<T> = {};

  items.forEach((item) => {
    const myKey = String(item[key]);

    groupByObject[myKey] = items.filter((person) => item[key] === person[key]);
  });

  return groupByObject;
}
