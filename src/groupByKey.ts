type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const result: GroupsMap<T> = {};

  items.forEach((el) => {
    if (!((el[key] as string) in result)) {
      result[el[key] as string] = [el];
    } else {
      result[el[key] as string].push(el);
    }
  });

  return result;
}
