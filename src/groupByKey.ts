type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T, K extends keyof T>(
  items: T[],
  key: K,
): GroupsMap<T> {
  const resultObject: GroupsMap<T> = {};

  items.forEach((item) => {
    const neededKey = String(item[key]);

    if (!resultObject[neededKey]) {
      resultObject[neededKey] = [];
    }

    resultObject[neededKey].push(item);
  });

  return resultObject;
}
