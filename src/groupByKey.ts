type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T extends Record<string, any>>(
  items: T[],
  key: keyof T,
): GroupsMap<T> {
  const groupsOfObjects: GroupsMap<T> = {};

  items.forEach((item) => {
    const value = String(item[key]);

    if (!groupsOfObjects[value]) {
      groupsOfObjects[value] = [];
    }
    groupsOfObjects[value].push(item);
  });

  return groupsOfObjects;
}
