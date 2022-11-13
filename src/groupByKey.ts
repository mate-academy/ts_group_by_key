type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const groupObject: GroupsMap<T> = {};

  items.forEach((item) => {
    const value = item[key];

    if (!groupObject[value]) {
      groupObject[value] = [];
    }

    groupObject[value].push(item);
  });

  return groupObject;
}
