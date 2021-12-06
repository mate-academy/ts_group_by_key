type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const resultObject: GroupsMap<T> = {};

  items.forEach((element) => {
    const objKey = String(element[key]);

    if (!resultObject[objKey]) {
      resultObject[objKey] = [];
    }

    resultObject[objKey].push(element);
  });

  return resultObject;
}
