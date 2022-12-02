/* eslint-disable array-callback-return */
type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  // write code here;
  const result: GroupsMap<T> = {};

  items.map((el) => {
    const newKey: string = `${el[key]}`;

    result[newKey] = items.filter((item) => item[key] === el[key]);
  });

  return result;
}
