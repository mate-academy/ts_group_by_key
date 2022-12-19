type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const grouppedObject: GroupsMap<T> = {};

  items.forEach((item) => {
    const val = String(item[key]);

    if (!(val in grouppedObject)) {
      grouppedObject[val] = [];
    }

    grouppedObject[val].push(item);
  });

  return grouppedObject;
}
