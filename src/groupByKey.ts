type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const groupedObject: GroupsMap<T> = {};

  items.forEach((item: T) => {
    const stringKey = item[key] as string;

    if (!groupedObject[stringKey]) {
      groupedObject[stringKey] = [];
    }

    groupedObject[stringKey].push(item);
  });

  return groupedObject;
}
