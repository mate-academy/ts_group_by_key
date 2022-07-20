type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const result: GroupsMap<T> = {};

  items.forEach((item: T) => {
    if (result[item[key] as unknown as string]) {
      result[item[key] as unknown as string].push(item);
    } else {
      result[item[key] as unknown as string] = [item];
    }
  });

  return result;
}
