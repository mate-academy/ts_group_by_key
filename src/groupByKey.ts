type GroupsMap<T> = {
  [key: string]: T[];
};

type Item = {
  [key: string]: string | number;
};

export function groupByKey(items: Item[], key: string): GroupsMap<Item> {
  const sortedObject: GroupsMap<Item> = {};

  items.forEach((item: Item) => {
    const property: string | number = item[key];

    if (!(property in sortedObject)) {
      sortedObject[property] = [];
    }

    sortedObject[property].push(item);
  });

  return sortedObject;
}
