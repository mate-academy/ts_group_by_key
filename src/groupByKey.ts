type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const sorted: GroupsMap<T> = {};

  items.forEach((item) => {
    const prop = String(item[key]);

    if (!sorted[prop]) {
      sorted[prop] = [];
    }

    sorted[prop].push(item);
  });

  return sorted;
}
