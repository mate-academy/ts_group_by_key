type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const arrOfUniqueValues: T[keyof T][] = [];
  const groupsMap: GroupsMap<T> = {};

  items.forEach((item: T) => {
    if (!arrOfUniqueValues.includes(item[key])) {
      arrOfUniqueValues.push(item[key]);
    }
  });

  arrOfUniqueValues.forEach((value: T[keyof T]) => {
    groupsMap[String(value)] = [];
  });

  items.forEach((item: T) => {
    groupsMap[String(item[key])].push(item);
  });

  return groupsMap;
}
