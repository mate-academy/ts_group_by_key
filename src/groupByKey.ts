type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], searchedKey: keyof T): GroupsMap<T> {
  const result: GroupsMap<T> = {};

  items.forEach((item: T) => {
    const groupKey = item[searchedKey];

    if (!result[groupKey]) {
      result[groupKey] = [];
    }

    result[groupKey].push(item);
  });

  return result;
}
