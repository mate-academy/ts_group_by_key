type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: string): GroupsMap<T> {
  const resultObject: GroupsMap<T> = {};

  items.forEach((item) => {
    const potentialKey = item[key];

    if (!resultObject[potentialKey]) {
      resultObject[potentialKey] = [];
    }

    resultObject[potentialKey].push(item);
  });

  return resultObject;
}
