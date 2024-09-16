type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items:T[], key: keyof T):GroupsMap<T> {
  const sortedObject:GroupsMap<T> = {};

  items.forEach((item) => {
    sortedObject[String(item[key])] = items
      .filter((el) => el[key] === item[key]);
  });

  return sortedObject;
}
