type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const result: GroupsMap<T> = {};

  items.forEach((item) => {
    const sortKey: string = String(item[key]);

    if (!result[sortKey]) {
      result[sortKey] = [];
    }

    result[sortKey].push(item);
  });

  return result;
}
