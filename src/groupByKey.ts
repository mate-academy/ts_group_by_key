
type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const result: GroupsMap<T> = {};

  items.forEach((el) => {
    const newKey: string = `${el[key]}`;

    result[newKey] = items.filter((item) => item[key] === el[key]);
  });

  return result;
}
