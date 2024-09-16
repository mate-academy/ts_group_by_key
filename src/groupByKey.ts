type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const groupByKeys: GroupsMap<T> = {};

  items.forEach((item) => {
    const value = String(item[key]);

    if (!(value in groupByKeys)) {
      groupByKeys[value] = [];
    }

    groupByKeys[value].push(item);
  });

  return groupByKeys;
}
