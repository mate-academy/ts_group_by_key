type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const newList: GroupsMap<T> = {};

  items.forEach((item) => {
    const itemKey = String(item[key]);

    if (!(itemKey in newList)) {
      newList[itemKey] = [];
    }

    newList[itemKey].push(item);
  });

  return newList;
}
