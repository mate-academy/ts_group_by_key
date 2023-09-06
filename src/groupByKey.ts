type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const resultObject: GroupsMap<T> = {};

  items.forEach((item: T) => {
    const keyValue = String(item[key]);

    if (!resultObject[keyValue]) {
      resultObject[keyValue] = [];
    }

    resultObject[keyValue].push(item);
  });

  return resultObject;
}
