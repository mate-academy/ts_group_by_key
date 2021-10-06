type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(
  items: T[],
  key: keyof T,
): object {
  const newObj: GroupsMap<T> = {};

  items.forEach((item: T) => {
    const itemKey: string = `${item[key]}`;

    if (!newObj[itemKey]) {
      newObj[itemKey] = [];
    }

    if (newObj[itemKey]) {
      newObj[itemKey].push(item);
    }
  });

  return newObj;
}
