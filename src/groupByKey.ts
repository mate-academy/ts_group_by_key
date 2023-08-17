type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(
  items: T[],
  key: keyof T,
): GroupsMap<T> {
  const newObject: GroupsMap<T> = {};

  items.forEach((item) => {
    const keyValue = item[key] as string;

    if (!newObject[keyValue]) {
      newObject[keyValue] = [];
    }
    newObject[keyValue].push(item);
  });

  return newObject;
}
