type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(
  items: T[],
  key: keyof T,
): GroupsMap<T> {
  const result: GroupsMap<T> = {};

  items.forEach((element: T) => {
    const value = element[key];

    if (!result[String(value)]) {
      result[String(value)] = [];
    }

    result[String(value)].push(element);
  });

  return result;
}
