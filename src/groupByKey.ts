type GroupByKey<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupByKey<T> {
  const result: GroupByKey<T> = {};

  items.forEach((item) => {
    result[String(item[key])] = items.filter((obj) => obj[key] === item[key]);
  });

  return result;
}
