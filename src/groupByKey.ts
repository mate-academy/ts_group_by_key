type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<
  T, R extends keyof T
>(
  items: T[], key: R,
): GroupsMap<T> {
  // write code here;
  const result: GroupsMap<T> = {};

  for (let i: number = 0; i < items.length; i += 1) {
    const curr = items[i][key];

    if (!(String(curr) in result)) {
      result[String(curr)] = items.filter((item) => item[key] === curr);
    }
  }

  return result;
}
