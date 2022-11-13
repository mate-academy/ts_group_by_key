type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const groupedByKey: GroupsMap<T> = {};

  items.forEach((item: T) => {
    const value = item[key];

    if (Object.prototype.hasOwnProperty.call(groupedByKey, value)) {
      groupedByKey[value].push(item);
    } else {
      groupedByKey[value] = [item];
    }
  });

  return groupedByKey;
}
