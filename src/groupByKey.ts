type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const resultObject: GroupsMap<T> = {};

  items.forEach((item) => {
    const objKey = item[key] as unknown as string;

    if (!resultObject[objKey]) {
      resultObject[objKey] = [item];
    } else {
      resultObject[objKey].push(item);
    }
  });

  return resultObject;
}
