type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(
  items: T[],
  key:keyof T,
): GroupsMap<T> {
  const groupedByKey: GroupsMap<T> = {};

  items.forEach((item) => {
    const currentKey = String(item[key]);

    if (groupedByKey[currentKey] === undefined) {
      groupedByKey[currentKey] = [item];
    } else {
      groupedByKey[currentKey].push(item);
    }
  });

  return groupedByKey;
}
