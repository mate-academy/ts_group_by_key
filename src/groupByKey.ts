type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(
  items: T[],
  key: keyof T,
): GroupsMap<T> {
  const result: GroupsMap<T> = {};

  items.forEach((element) => {
    const itemKey = `${element[key]}`;

    if (result[itemKey]) {
      result[itemKey].push(element);
    } else {
      result[itemKey] = [element];
    }
  });

  return result;
}
