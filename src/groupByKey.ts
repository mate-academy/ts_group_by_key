type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(
  items: T[], key: keyof T,
): GroupsMap<T> {
  return items.reduce((acc: GroupsMap<T>, element) => {
    const groupKey = String(element[key]);

    if (!Object.prototype.hasOwnProperty.call(acc, groupKey)) {
      acc[groupKey] = [];
    }
    acc[groupKey].push(element);

    return acc;
  }, {});
}
