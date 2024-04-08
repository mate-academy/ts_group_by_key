type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T, K extends keyof T>(
  items: T[],
  key: K,
): GroupsMap<T> {
  // write code here;
  return items.reduce(function (rv, x) {
    const keyValue = String(x[key]);

    (rv[keyValue] = rv[keyValue] || []).push(x);

    return rv;
  }, {});
}
