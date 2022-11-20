type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const groupedByKey: GroupsMap<T> = {};

  items.forEach((item: T) => {
    const value = String(item[key]);

    if (!groupedByKey[value]) {
      groupedByKey[value] = [];
    }

    groupedByKey[value].push(item);
  });

  return groupedByKey;
}
