type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const groupObject: GroupsMap<T> = {};

  items.forEach((item) => {
    const valueToKey = String(item[key]);

    if (!groupObject[valueToKey]) {
      groupObject[valueToKey] = [];
    }

    groupObject[valueToKey].push(item);
  });

  return groupObject;
}
