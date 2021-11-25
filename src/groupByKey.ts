type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const groupedObject: GroupsMap<T> = {};

  items.forEach((item) => {
    const objValues = String(item[key]);

    if (!groupedObject[objValues]) {
      groupedObject[objValues] = [];
    }
    groupedObject[objValues].push(item);
  });

  return groupedObject;
}
