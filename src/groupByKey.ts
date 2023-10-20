type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  return items.reduce((acc: GroupsMap<T>, item: T) => {
    const val = String([item[key]]);

    if (!acc[val]) {
      acc[val] = [];
    }
    acc[val].push(item);

    return acc;
  }, {});
}
