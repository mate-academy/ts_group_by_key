type GroupsMap<T> = {
  [key: string]: T[]; // Використовуємо string як тип для ключів
};

/* export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  if (items.length === 0) {
    return {};
  }

  const result: GroupsMap<T> = {};

  items.forEach((item) => {
    const groupKey = item[key];

    const groupKeyStringified = String(groupKey);

    if (!result[groupKeyStringified]) {
      result[groupKeyStringified] = [];
    }

    result[groupKeyStringified].push(item);
  });

  Object.keys(result).forEach((groupKey) => {
    const groupItems = result[groupKey];
    const stringSort = (a: T, b: T): number =>
      String(a[key]).localeCompare(String(b[key]));

    const numberSort = (a: T, b: T): number => Number(a[key]) - Number(b[key]);

    result[groupKey] = groupItems.sort(
      groupKey.match(/^\d+$/) ? numberSort : stringSort,
    );
  });

  return result;
}
*/
export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  return items.reduce((groups: GroupsMap<T>, item) => {
    const groupKey = item[key];

    if (typeof groupKey === 'string' || typeof groupKey === 'number') {
      if (!groups[groupKey]) {
        groups[groupKey] = [];
      }

      groups[groupKey].push(item);
    }

    return groups;
  }, {});
}
