type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  return items.reduce((groupedObject: GroupsMap<T>, object) => {
    const copyedGroupedObject = groupedObject;
    const groupedKey = String(object[key]);

    if (!copyedGroupedObject[groupedKey]) {
      copyedGroupedObject[groupedKey] = [];
    }

    copyedGroupedObject[groupedKey].push(object);

    return copyedGroupedObject;
  }, {});
}
