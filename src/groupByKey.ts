type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: string): GroupsMap<T> {
  const result: GroupsMap<T> = {};

  items.forEach((item: T) => {
    const index: string = String(item[key]);

    if (!result[index]) {
      result[index] = [];
    }

    result[index].push(item);
  });

  return result;
}
