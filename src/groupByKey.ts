type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(
  items: T[],
  key: keyof T,
): GroupsMap<T> {
  const groupObject: GroupsMap<T> = {};

  items.forEach((item) => {
    const resultKey = item[key];

    if (!groupObject[resultKey]) {
      groupObject[resultKey] = [];
    }

    groupObject[resultKey].push(item);
  });

  return groupObject;
}
