type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const result: GroupsMap<T> = {};

  const keyValues = items.map((item) => item[key]);

  keyValues.forEach((value) => {
    if (!(`${value}` in result)) {
      result[`${value}`] = items.filter((item) => item[key] === value);
    }
  });

  return result;
}
