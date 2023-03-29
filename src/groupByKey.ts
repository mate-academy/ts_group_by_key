type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const groupedObject: GroupsMap<T> = {};

  items.forEach((item) => {
    const keyObj = String(item[key]);

    if (keyObj in groupedObject) {
      groupedObject[keyObj].push(item);
    } else {
      groupedObject[keyObj] = [item];
    }
  });

  return groupedObject;
}
