
type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const groupedObject: GroupsMap<T> = {};

  items.forEach((elem) => {
    const item: string = `${elem[key]}`;

    if (!groupedObject[item]) {
      groupedObject[item] = [];
    }
    groupedObject[item].push(elem);
  });

  return groupedObject;
}
