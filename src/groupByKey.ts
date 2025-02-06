type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T extends object>(
  items: T[],
  key: keyof T,
): GroupsMap<T> {
  const arrOfValues = [...new Set(items.map((item) => item[key]))];
  const result: GroupsMap<T> = {};

  arrOfValues.forEach((value) => {
    result[String(value)] = items.filter((item) => item[key] === value);
  });

  return result;
}
