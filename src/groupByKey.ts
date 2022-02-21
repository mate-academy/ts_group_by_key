type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const result: GroupsMap<T> = {};

  items.forEach((item) => {
    result[String(item[key])] = items.filter((obj) => obj[key] === item[key]);
  });

  return result;
}
