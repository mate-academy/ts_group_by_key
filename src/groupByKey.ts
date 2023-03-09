type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T) : GroupsMap<T> {
  const groupedObject: GroupsMap<T> = {};

  items.forEach((item) => {
    const valueOfKey = String((item[key]));

    if (!groupedObject[valueOfKey]) {
      groupedObject[valueOfKey] = [];
    }
    groupedObject[valueOfKey].push(item);
  });

  return groupedObject;
}
