type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(
  items: T[],
  key: keyof T,
):GroupsMap<T> {
  const groupList:GroupsMap<T> = {};

  items.forEach((item) => {
    groupList[String(item[key])] = items
      .filter((x) => x[key] === item[key]);
  });

  return groupList;
}
