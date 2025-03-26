type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const sortByKey: GroupsMap<T> = {};

  items.forEach((item) => {
    const keyValue = String(item[key]);

    if (!sortByKey[keyValue]) {
      sortByKey[keyValue] = items
        .filter((elem) => String(elem[key]) === keyValue);
    }
  });

  return sortByKey;
}
