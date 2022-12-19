type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const groupedByKey = {};

  items.forEach((item) => {
    const groupName = item[key].toString();

    if (groupName in groupedByKey) {
      groupedByKey[groupName].push(item);
    } else {
      groupedByKey[groupName] = [item];
    }
  });

  return groupedByKey;
}
