type GroupByKey<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupByKey<T> {
  const result: GroupByKey<T> = {};

  items.forEach((item) => {
    if (!result[String(item[key])]) {
      result[String(item[key])] = [];
    }
    result[String(item[key])].push(item);
  });

  return result;
}
