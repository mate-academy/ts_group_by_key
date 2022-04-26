type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const groupObject: GroupsMap<T> = {};

  items.forEach((elem: T) => {
    const newGroupKey = String(elem[key]);

    if (!groupObject[newGroupKey]) {
      groupObject[newGroupKey] = [];
    }

    groupObject[newGroupKey].push(elem);
  });

  return groupObject;
}
