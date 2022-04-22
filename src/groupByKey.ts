type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const groupObject: GroupsMap<T> = {};

  items.forEach((item) => {
    const valKey = String(item[key]);

    if (!groupObject[valKey]) {
      groupObject[valKey] = [];
    }

    groupObject[valKey].push(item);
  });

  return groupObject;
}
