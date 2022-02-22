type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const result: GroupsMap<T> = {};

  items.forEach((item) => {
    if (!result[String(item[key])]) {
      result[String(item[key])] = [];
    }

    result[String(item[key])].push(item);
  });

  return result;
}
