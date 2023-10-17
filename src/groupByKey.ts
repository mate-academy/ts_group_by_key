type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(
  items: T[],
  key: keyof T,
): GroupsMap<T> {
  const result: GroupsMap<T> = {};

  items.forEach((item) => {
    const resultKey = String(item[key]);

    if (!(resultKey in result)) {
      result[resultKey] = [item];
    } else {
      result[resultKey] = [...result[resultKey], item];
    }
  });

  return result;
}
