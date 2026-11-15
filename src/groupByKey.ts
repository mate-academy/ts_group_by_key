type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(
  items: T[],
  key: keyof T,
): GroupsMap<T> {
  // write code here;
  const result: GroupsMap<T> = {};

  items.forEach((item): void => {
    const resultKey = String(item[key]);

    if (Object.hasOwn(result, resultKey)) {
      result[resultKey].push(item);
    } else {
      result[resultKey] = [item];
    }
  });

  return result;
}
