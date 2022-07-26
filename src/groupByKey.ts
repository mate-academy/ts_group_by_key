type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: string): GroupsMap<T> {
  const result: GroupsMap<T> = {};

  items.forEach((item: T) => {
    const resultKey: string = item[key] as string;

    if (!result[resultKey]) {
      result[resultKey] = [];
    }

    result[resultKey].push(item);
  });

  return result;
}
