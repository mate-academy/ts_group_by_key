type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(
  items: T[],
  key: keyof T,
): GroupsMap<T> {
  const returnedObject: GroupsMap<T> = {};

  items.forEach((item: T): void => {
    const currentKey = item[key] as string;

    if (!returnedObject[currentKey]) {
      returnedObject[currentKey] = [];
    }

    returnedObject[currentKey].push(item);
  });

  return returnedObject;
}
