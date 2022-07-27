type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items:T[], key: keyof T):GroupsMap<T> {
  const resultObject: GroupsMap<T> = {};

  items.forEach((el) => {
    const elKey = String(el[key]);

    if (!Object.prototype.hasOwnProperty.call(resultObject, elKey)) {
      resultObject[elKey] = [];
    }

    resultObject[elKey].push(el);
  });

  return resultObject;
}
