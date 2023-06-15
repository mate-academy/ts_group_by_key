type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const resultObject: GroupsMap<T> = {};

  items.forEach((item) => {
    const itemKey = String(item[key]);

    if (resultObject[itemKey]) {
      resultObject[itemKey].push(item);
    } else {
      resultObject[itemKey] = [item];
    }
  });

  return resultObject;
}
