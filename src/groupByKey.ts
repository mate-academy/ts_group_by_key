type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const result: GroupsMap<T> = {};

  items.forEach((item) => {
    const groupBy = String(item[key]);

    if (!result[groupBy]) {
      result[groupBy] = [];
    }

    result[groupBy].push(item);
  });

  return result;
}
