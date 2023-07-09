type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const resultingObject: GroupsMap<T> = {};

  items.forEach((item) => {
    const resultingKey = <string>item[key];

    if (!resultingObject[resultingKey]) {
      resultingObject[resultingKey] = [item];
    } else {
      resultingObject[resultingKey].push(item);
    }
  });

  return resultingObject;
}
