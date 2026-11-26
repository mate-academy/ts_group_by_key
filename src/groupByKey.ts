type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T extends object>(
  items: T[],
  key: keyof T,
): GroupsMap<T> {
  const result: GroupsMap<T> = {};

  items.forEach((item) => {
    const groupValue = String(item[key]);

    if (!result[groupValue]) {
      result[groupValue] = [];
    }

    result[groupValue].push(item);
  });

  return result;
}
