type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const result: GroupsMap<T> = {};
  const resultKeys = items.map((item) => item[key]);

  resultKeys.forEach((resultKey) => {
    if (String(resultKey)) {
      result[String(resultKey)] = items
        .filter((item) => item[key] === resultKey);
    }
  });

  return result;
}
