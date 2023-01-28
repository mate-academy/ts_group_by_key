type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T extends object>(items: T[], key: keyof T)
  : GroupsMap<T> {
  const groupsObj: GroupsMap<T> = {};

  items.forEach((el) => {
    const newKey = String(el[key]);

    if (!(newKey in groupsObj)) {
      groupsObj[newKey] = [];
    }

    groupsObj[newKey].push(el);
  });

  return groupsObj;
}
