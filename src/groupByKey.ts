type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(
  items: T[],
  key: keyof T,
): GroupsMap<T> {
  const groupedByKey: GroupsMap<T> = {};

  items.forEach((item) => {
    const value = String(item[key]);

    if (!groupedByKey[String(value)]) {
      groupedByKey[String(value)] = [];
    }
    groupedByKey[String(value)].push(item);
  });

  return groupedByKey;
}
