type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: T): GroupsMap<T> {
  const groupObject: GroupsMap<T> = {};

  items.forEach((item) => {
    const valueOfKey: string = String(item[key]);

    if (!groupObject[valueOfKey]) {
      groupObject[valueOfKey] = [];
    }
    groupObject[valueOfKey].push(item);
  });

  return groupObject;
}
