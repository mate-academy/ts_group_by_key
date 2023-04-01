// import { type } from "os";

type GroupsMap<T> = {
  [key: string]: T[];
};

type Item = {
  [key: string]: string | number;
};

export function groupByKey(items: Item[], key: string): GroupsMap<Item> {
  const sortedObject: GroupsMap<Item> = items.reduce((
    obj: GroupsMap<Item>,
    item:Item,
  ) => {
    return {
      ...obj,
      [item[key]]: [],
    };
  }, {});

  items.forEach((item: Item) => {
    const property: string | number = item[key];

    if (property in sortedObject) {
      sortedObject[property].push(item);
    }
  });

  return sortedObject;
}
