type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const groupedByKey: GroupsMap<T> = {};
  const allKeys = items
    .map((item) => item[key])
    .filter((item, index, arr) => arr.indexOf(item) === index);

  for (const currentKey of allKeys) {
    groupedByKey[String(currentKey)] = items.filter(
      (item) => item[key] === currentKey,
    );
  }

  return groupedByKey;
}
