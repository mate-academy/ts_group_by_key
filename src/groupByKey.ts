type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
 const resultObject: GroupsMap<T> = {};

  items.forEach((item) => {
    const objKey = item[key] as string;

    if (!resultObject[objKey]) {
      resultObject[objKey] = [];
    }

    resultObject[objKey].push(item);
  });

  return resultObject;
}
