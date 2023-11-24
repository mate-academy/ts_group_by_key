type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const result: GroupsMap<T> = {};

  items.forEach((el: T) => {
    const value = String(el[key]);

    result[value] = !result[value]
      ? [el]
      : [...result[value], el];
  });

  return result;
}
