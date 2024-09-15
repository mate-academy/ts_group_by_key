type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T):GroupsMap<T> {
  const groupedKeys: GroupsMap<T> = {};

  items.forEach((item) => {
    const groupKey = item[key] as string;

    if (!(groupKey in groupedKeys)) {
      groupedKeys[groupKey] = [];
    }
    groupedKeys[groupKey].push(item);
  });

  return groupedKeys;
}
