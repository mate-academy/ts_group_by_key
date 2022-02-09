type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  // write code here;
  const result: GroupsMap<T> = {};

  items.forEach((el: T) => {
    const value = String(el[key]);

    if (!result[value]) {
      result[value] = items.filter((item: T) => item[key] === el[key]);
    }
  });

  return result;
}
