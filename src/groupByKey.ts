
type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const objItems: GroupsMap<T> = {};

  items.forEach((elem) => {
    const keyZnachenia = elem[key].toString();

    if (!objItems[keyZnachenia]) {
      objItems[keyZnachenia] = [];
    }
    objItems[keyZnachenia].push(elem);
  });

  return objItems;
}
