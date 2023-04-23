type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const result: GroupsMap<T> = {};

  Object.values(items).forEach((itemKey) => {
    if (String(itemKey[key])) {
      const value = String(itemKey[key]);

      result[value] = items.filter((item: T) => String(item[key]) === value);
    }
  });

  return result;
}
