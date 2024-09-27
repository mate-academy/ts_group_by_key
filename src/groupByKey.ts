type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const groupsObj: GroupsMap<T> = {};

  items.forEach((item) => {
    const keyValue = String(item[key]);

    if (!groupsObj[keyValue]) {
      groupsObj[keyValue] = [];
    }

    groupsObj[keyValue].push(item);
  });

  return groupsObj;
}
