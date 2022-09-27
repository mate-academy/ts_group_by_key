type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  return items.reduce((arr, item) => ({
    ...arr,
    [(item[key]) as string]: items.filter((el) => el[key] === item[key]),
  }), {});
}
