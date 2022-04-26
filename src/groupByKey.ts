type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const res = items.reduce((obj: GroupsMap<T>, item: T) => {
    const resultObject = { ...obj };
    const keyForGroup = String(item[key]);

    if (!Object.prototype.hasOwnProperty.call(resultObject, keyForGroup)) {
      resultObject[keyForGroup] = [];
    }

    resultObject[keyForGroup].push(item);

    return resultObject;
  }, {});

  return res;
}
