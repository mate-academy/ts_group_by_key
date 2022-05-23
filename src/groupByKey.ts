type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const groupedObject: GroupsMap<T> = {};

  items.forEach((item: T) => {
    const newKey = String(item[key]);

    if (!groupedObject[newKey]) {
      groupedObject[newKey] = [item];
    } else {
      groupedObject[newKey].push(item);
    }
  });

  return groupedObject;
}
