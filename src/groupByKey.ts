type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(
  items: Array<T>,
  key: keyof T,
): GroupsMap<T> {
  const result: GroupsMap<T> = {};

  items.forEach((obj) => {
    const keyValue = String(obj[key]);

    if (!result[keyValue]) {
      result[keyValue] = items.filter((elem) => String(elem[key]) === keyValue);
    }
  });

  return result;
}
