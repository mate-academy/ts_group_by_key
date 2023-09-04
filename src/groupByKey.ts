type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const itemsCopy = [...items];
  const result: GroupsMap<T> = {};

  const values = items.map((item) => item[key]);

  values.forEach((value) => {
    const array = itemsCopy.filter((item) => item[key] === value);

    result[value as keyof GroupsMap<T>] = array;
  });

  return result;
}
