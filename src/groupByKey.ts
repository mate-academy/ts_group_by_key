type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  return items.reduce((acc: GroupsMap<T>, item) => {
    const result = item[key] as keyof GroupsMap<T>;

    if (!acc[result]) {
      acc[result] = [];
    }

    acc[result].push(item);

    return acc;
  }, {});
}
