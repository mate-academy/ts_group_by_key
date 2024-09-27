type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  return items.reduce((acc: GroupsMap<T>, item: T): GroupsMap<T> => {
    const sortedObject: GroupsMap<T> = acc;
    const groupedByProp: string = `${item[key]}`;

    if (!sortedObject[groupedByProp]) {
      sortedObject[groupedByProp] = [];
    }

    sortedObject[groupedByProp].push(item);

    return sortedObject;
  }, {});
}
