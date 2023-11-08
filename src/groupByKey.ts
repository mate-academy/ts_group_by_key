export {};

type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const groupedObject: GroupsMap<T> = {};

  items.forEach((item, _index, array) => {
    const keyValue = item[key] as string;
    const filteredArray = array.filter((obj) => obj[key] === keyValue);

    groupedObject[keyValue] = filteredArray;
  });

  return groupedObject;
}
