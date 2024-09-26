type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const groupObject: GroupsMap<T> = {};

  items.forEach((obj: T) => {
    const groupKey = obj[key] as string;

    if (!groupObject[groupKey]) {
      groupObject[groupKey] = [];
    }

    groupObject[groupKey].push(obj);
  });

  return groupObject;
}
