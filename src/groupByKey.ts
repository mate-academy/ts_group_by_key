type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  // write code here;
  return items.reduce((acc: GroupsMap<T>, item: T) => {
    const groupKey = item[key] as string;

    if (!acc[groupKey]) {
      acc[groupKey] = [];
    }
    acc[groupKey].push(item);

    return acc;
  }, {});
}
