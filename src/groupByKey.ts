type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const objItems: GroupsMap<T> = {};

  items.forEach((elem) => {
    const keyElement = elem[key].toString();

    if (!objItems[keyElement]) {
      objItems[keyElement] = [];
    }

    objItems[keyElement].push(elem);
  });

  return objItems;
}
