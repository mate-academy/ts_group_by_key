type GroupsMap<T> = {
  [key: string]: T[];
};

type T = object;

export function groupByKey(items: T[], key: keyof T): GroupsMap<T> {
  const result: GroupsMap<T> = {};

  items.forEach((item: T) => {
    const sortKey: string = String(item[key]);

    if (!result[sortKey]) {
      result[sortKey] = [];
    }

    result[sortKey].push(item);
  });

  return result;
}
