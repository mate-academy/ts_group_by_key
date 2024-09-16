type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const sorted: GroupsMap<T> = {};

  items.forEach((item) => {
    const keyItem = item[key] as string;

    sorted[keyItem] = sorted[keyItem] || [];
    sorted[keyItem].push(item);
  });

  return sorted;
}
