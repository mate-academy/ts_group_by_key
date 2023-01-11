type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(
  items: T[],
  key: keyof T,
): object {
  const sortObj: GroupsMap<T> = { };

  items.forEach((item: T) => {
    const usedKey = key;
    const usedValue = String(item[usedKey]);

    if (sortObj[usedValue]) {
      sortObj[usedValue].push(item);
    } else {
      sortObj[usedValue] = [item];
    }
  });

  return sortObj;
}
