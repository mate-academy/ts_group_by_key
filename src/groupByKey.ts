type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const result: GroupsMap<T> = {};

  items.forEach((item) => {
    const sortKey = String(item[key]);

    if (!(sortKey in result)) {
      result[sortKey] = [];
    }

    result[sortKey].push(item);
  });

  return result;
}
