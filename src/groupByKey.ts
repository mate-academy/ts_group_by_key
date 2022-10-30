type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const groupedByKey: GroupsMap<T> = {};

  items.forEach((item) => {
    groupedByKey[String(item[key])] = items.filter(
      (element) => element[key] === item[key],
    );
  });

  return groupedByKey;
}
