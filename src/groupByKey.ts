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

    if (!result[value as string]) {
      result[value as string] = [];
    }

    result[value as string].push(element);
  });

  return result;
}
