type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(
  items: T[],
  key: keyof T,
): object {
  const grouppedObject: GroupsMap<T> = { };

  items.forEach((item: T) => {
    const usedKey = key;
    const usedValue = String(item[usedKey]);

    if (grouppedObject[usedValue]) {
      grouppedObject[usedValue].push(item);
    } else {
      grouppedObject[usedValue] = [item];
    }
  });

  return grouppedObject;
}
