type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(
  items: T[],
  key: keyof T,
): GroupsMap<T> {
  const result: GroupsMap<T> = {};

  items.forEach((item: T) => {
    const value = item[key] as unknown as string;

    if (!result[value]) {
      result[value] = [];
    }

    result[value].push(item);
  });

  return result;
}
