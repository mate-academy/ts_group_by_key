type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const result: GroupsMap<T> = {};

  items.forEach((item) => {
    const value = item[key] as string;

    if (result[value]) {
      result[value] = [...result[value], item];
    } else {
      result[value] = [item];
    }
  });

  return result;
}
