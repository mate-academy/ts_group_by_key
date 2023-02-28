type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const keysArray = items.map((item) => item[key]);
  const newObj: GroupsMap<T> = {};

  keysArray.forEach((value) => {
    if (!(String(value) in newObj)) {
      newObj[String(value)] = items.filter((item) => item[key] === value);
    }
  });

  return newObj;
}
