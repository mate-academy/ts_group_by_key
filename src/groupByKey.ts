type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T extends object>(
  items: T[],
  key: string,
): GroupsMap<T> {
  const result = {} as GroupsMap<T>;

  items.forEach((el: T) => {
    const groupKey: string = String(el[key]);

    if (!(groupKey in result)) {
      result[groupKey] = [];
    }

    result[groupKey].push(el);
  });

  return result;
}
