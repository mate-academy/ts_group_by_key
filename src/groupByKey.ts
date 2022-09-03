type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const groupedByKey: GroupsMap<T> = {};

  items.forEach((item) => {
    const itemKey: string = `${item[key]}`;

    if (!groupedByKey[itemKey]) {
      groupedByKey[itemKey] = [];
    }

    groupedByKey[itemKey].push(item);
  });

  return groupedByKey;
}
