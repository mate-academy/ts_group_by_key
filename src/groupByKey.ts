interface GroupsMap<T> {
  [key: string]: T[];
}

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const resultObject: GroupsMap<T> = {};

  items.forEach((item) => {
    const potentialKey = String(item[key]);

    if (!resultObject[potentialKey]) {
      resultObject[potentialKey] = [];
    }

    resultObject[potentialKey].push(item);
  });

  return resultObject;
}
