type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const groupedByKey:GroupsMap<T> = {};

  items.map((item: T) => {
    return (groupedByKey[`${item[key]}`] = groupedByKey[`${item[key]}`]
    || []).push(item);
  });

  return groupedByKey;
}
