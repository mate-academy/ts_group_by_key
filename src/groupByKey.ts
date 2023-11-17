type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const result: GroupsMap<T> = {};

  items.forEach((item: T) => {
    const value = item[key] as string;

    if (value in result) {
      result[value].push({ ...item });
    } else {
      result[value] = [{ ...item }];
    }
  });

  return result;
}
