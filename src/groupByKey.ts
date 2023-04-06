type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: string): GroupsMap<T> {
  const groupedByKey: GroupsMap<T> = {};

  items.forEach((item) => {
    if (Object.prototype.hasOwnProperty.call(groupedByKey, item[key])) {
      groupedByKey[item[key]].push(item);
    } else {
      groupedByKey[item[key]] = [item];
    }
  });

  return groupedByKey;
}
