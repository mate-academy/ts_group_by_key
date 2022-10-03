type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  return items.reduce<GroupsMap<T>>((accumulator, item) => ({
    ...accumulator,
    [(item[key]) as string]: items
      .filter((element) => element[key] === item[key]),
  }), {});
}
