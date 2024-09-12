type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const keyArray = items.map((item) => item[key]);
  const groupObj: GroupsMap<T> = {};

  keyArray.forEach((value) => {
    if (!(String(value) in groupObj)) {
      groupObj[String(value)] = items.filter((item) => item[key] === value);
    }
  });

  return groupObj;
}
