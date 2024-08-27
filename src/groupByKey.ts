type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const result: GroupsMap<T> = {};

  items.forEach((item) => {
    const searchKey = String(item[key]);

    if (!result[searchKey]) {
      result[searchKey] = [];
    }

    result[searchKey].push(item);
  });

  return result;
}
