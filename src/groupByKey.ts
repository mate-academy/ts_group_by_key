type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const result: GroupsMap<T> = {};
  const groupKeys: string[] = [];

  Object.values(items).forEach((itemKey) => {
    if (String(itemKey[key])) {
      groupKeys.push(String(itemKey[key]));
    }
  });

  groupKeys.forEach((groupKey: string) => {
    result[groupKey] = items
      .filter((item: T) => String(item[key]) === groupKey);
  });

  return result;
}
