type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(
  items: T[],
  key: keyof T,
): object {
  const newObj: GroupsMap<T> = {};

  items.forEach((item: T) => {
    const x: string = `${item[key]}`;

    if (!newObj[x]) {
      newObj[x] = [];
    }

    if (newObj[x]) {
      newObj[x].push(item);
    }
  });

  return newObj;
}
