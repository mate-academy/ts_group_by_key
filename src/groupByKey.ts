type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const sorted: GroupsMap<T> = {};

  items.forEach((item) => {
    if (!sorted[item[key]]) {
      sorted[item[key]] = [];
    }

    sorted[item[key]].push(item);
  });

  return sorted;
}
