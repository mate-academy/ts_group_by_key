type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  // write code here;
  const groupedByKey: GroupsMap<T> = {};

  items.forEach((item: T) => {
    const currentKey = String(item[key]);

    if (!groupedByKey[currentKey]) {
      groupedByKey[currentKey] = [];
    }

    groupedByKey[currentKey].push(item);
  });

  return groupedByKey;
}
