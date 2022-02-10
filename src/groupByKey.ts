type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  // write code here;
  const groupedByKey: GroupsMap<T> = {};

  items.forEach((item) => {
    const sortKey = `${item[key]}`;

    if (!(sortKey in groupedByKey)) {
      groupedByKey[sortKey] = [];
    }

    groupedByKey[sortKey].push(item);
  });

  return groupedByKey;
}
