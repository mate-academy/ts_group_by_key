type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  // write code here;
  const groupedByKey: GroupsMap<T> = {};

  items.forEach((item) => {
    const value = String(item[key]);

    if (!(value in groupedByKey)) {
      groupedByKey[value] = [];
    }

    groupedByKey[value].push(item);
  });

  return groupedByKey;
}
