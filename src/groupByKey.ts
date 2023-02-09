type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const values: string[] = items.map((obj) => String(obj[key]));
  const uniqValues: string[] = [];
  const result: GroupsMap<T> = {};

  values.forEach((item) => {
    if (!uniqValues.includes(item)) {
      uniqValues.push(item);
    }
  });

  uniqValues.forEach((v) => {
    result[v] = items.filter((obj) => String(obj[key]) === v);
  });

  return result;
}
