type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const keys = items.map((item) => item[key]);
  const uniqueKeys = Array.from(new Set(keys));
  const res: GroupsMap<T> = {};

  uniqueKeys.forEach((uniqueKey) => {
    res[uniqueKey as string] = items.filter((item) => {
      return item[key] === uniqueKey;
    });
  });

  return res;
}
