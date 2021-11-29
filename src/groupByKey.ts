type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T):GroupsMap<T> {
  const groupObject = items.reduce((result: GroupsMap<T>, item) => {
    const newKey = String(item[key]);
    const resultObject = { ...result };

    resultObject[newKey] = resultObject[newKey] || [];
    resultObject[newKey].push(item);

    return resultObject;
  }, {});

  return groupObject;
}
