type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const sortedByKey: GroupsMap<T> = {};

  items.forEach((item: T) => {
    const keyValue = String(item[key]);

    if (!sortedByKey[keyValue]) {
      sortedByKey[keyValue] = [];
    }

    sortedByKey[keyValue].push(item);
  });

  return sortedByKey;
}
