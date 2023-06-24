type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  return items.reduce<GroupsMap<T>>((acc, item) => {
    const keyValue = String(item[key]);

    acc[keyValue] = acc[keyValue] ?? [];
    acc[keyValue].push(item);

    return acc;
  }, {});
}
