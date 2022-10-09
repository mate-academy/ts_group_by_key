type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const resultObject: GroupsMap<T> = {};

  items.forEach((item) => {
    if (resultObject[`${item[key]}`]) {
      resultObject[`${item[key]}`].push(item);
    } else {
      resultObject[`${item[key]}`] = [item];
    }
  });

  return resultObject;
}
