type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: [], key: keyof T): GroupsMap<T> {
  const sortedObject: GroupsMap<T> = {};

  items.forEach((item) => {
    if (!sortedObject[item[key]]) {
      sortedObject[item[key]] = [];
    }

    sortedObject[item[key]].push(item);
  });

  return sortedObject;
}
