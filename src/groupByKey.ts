type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  return items.reduce((groupedObject: GroupsMap<T>, anotheObj) => {
    const copyedGroupedObject = groupedObject;
    const groupedKey = String(anotheObj[key]);

    if (!copyedGroupedObject[groupedKey]) {
      copyedGroupedObject[groupedKey] = [];
    }

    copyedGroupedObject[groupedKey].push(anotheObj);

    return copyedGroupedObject;
  }, {});
}
