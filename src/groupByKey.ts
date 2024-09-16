type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const groupsObj: GroupsMap<T> = {};

  items.forEach((item) => {
    const keyValue = item[key] as string;
    const filteredArray = items.filter((obj) => obj[key] === keyValue);

    groupsObj[keyValue] = filteredArray;
  });

  return groupsObj;
}
