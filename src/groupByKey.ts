type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const groupedObject: GroupsMap<T> = {};

  items.forEach((el) => {
    const value = String(el[key]);

    if (value in groupedObject) {
      groupedObject[value].push(el);
    } else {
      groupedObject[value] = [el];
    }
  });

  return groupedObject;
}
