type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T, K extends keyof T>(
  items: T[],
  key: K & (T[K] extends string | number ? K : never),
): GroupsMap<T> {
  // write code here;
  const result: GroupsMap<T> = {};

  items.forEach((item): void => {
    const resultKey = item[key];

    if (Object.hasOwn(result, resultKey)) {
      result[resultKey].push(item);
    } else {
      result[resultKey] = [item];
    }
  });

  return result;
}
