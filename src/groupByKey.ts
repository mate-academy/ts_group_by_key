type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const groupObject: GroupsMap<T> = {};

  items.forEach((item) => {
    if (!groupObject[String(item[key])]) {
      groupObject[String(item[key])]
      = items.filter((element) => element[key] === item[key]);
    }
  });

  return groupObject;
}
