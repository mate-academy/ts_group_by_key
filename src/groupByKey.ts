type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const groupByKeyObject: GroupsMap<T> = {};

  items.forEach((item) => {
    const givenKey = String(item[key]);

    if (!groupByKeyObject[givenKey]) {
      groupByKeyObject[givenKey] = [];
    }

    groupByKeyObject[givenKey].push(item);
  });

  return groupByKeyObject;
}
