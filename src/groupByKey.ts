type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const result = {};
  const values: T[keyof T][] = [];

  items.forEach((item) => {
    if (values.indexOf(item[key]) === -1) {
      values.push(item[key]);
    }
  });

  values.forEach((value) => {
    result[value] = items.filter((item) => item[key] === value);
  });

  return result;
}
