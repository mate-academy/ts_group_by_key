type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const groupedByKey: GroupsMap<T> = {};
  const keysInGrouped: any[] = [];

  items.forEach((item) => {
    if (!keysInGrouped.includes(item[key])) {
      keysInGrouped.push(item[key]);
    }
  });

  keysInGrouped.forEach((group) => {
    groupedByKey[group] = items.filter((element) => element[key] === group);
  });

  return groupedByKey;
}
