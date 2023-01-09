type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const result: GroupsMap<T> = {};

  items.map((item) => {
    const x = String(item[key]);

    if (!result[x]) {
      result[x] = [];
    }

    result[x].push(item);

    return result;
  });

  return result;
}
