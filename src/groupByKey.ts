type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const result: GroupsMap<T> = {};

  items
    .filter((item) => item[key])
    .map((item) => {
      const value = item[key] as string;

      if (!result[value]) {
        result[value] = [];
      }

      result[value].push(item);

      return result;
    });

  return result;
}
