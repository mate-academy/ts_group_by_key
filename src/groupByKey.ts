interface GroupsMap<T> {
  [key: string]: T[];
}

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const groupedByKey: GroupsMap<T> = {};

  items.forEach((item) => {
    const itemValue = String(item[key]);

    if (!(itemValue in groupedByKey)) {
      groupedByKey[itemValue] = [];
    }

    groupedByKey[itemValue].push(item);
  });

  return groupedByKey;
}
