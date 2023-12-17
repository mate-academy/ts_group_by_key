type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const values = [];

  items.forEach((item) => {
    if (!values.includes(item[key])) {
      values.push(item[key]);
    }
  });

  return values.reduce((acc, value) => {
    acc[value] = items.filter((item) => item[key] === value);

    return acc;
  }, {});
}
