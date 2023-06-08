type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const sortObj: GroupsMap<T> = {};

  items.forEach((obj) => {
    const value = obj[key];

    if (sortObj[value as string]) {
      sortObj[value as string].push(obj);
    } else {
      sortObj[value as string] = [obj];
    }
  });

  return sortObj;
}
