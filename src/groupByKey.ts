type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const keyArray = items.map((item) => item[key]);
  const groupedObj: GroupsMap<T> = {};

  keyArray.forEach((value) => {
    if (!(String(value) in groupedObj)) {
      groupedObj[String(value)] = items.filter((item) => item[key] === value);
    }
  });

  return groupedObj;
}
