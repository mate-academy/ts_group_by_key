type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const result = items.reduce((accumulator, item) => ({
    ...accumulator,
    [(item[key]) as string]: items
      .filter((element) => element[key] === item[key]),
  }), {});

  return result;
}
