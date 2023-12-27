type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: string): GroupsMap<T> {
  return items.reduce<GroupsMap<T>>((acc, item) => {
    const keyValue = item[key].toString();

    if (!acc[keyValue]) {
      acc[keyValue] = [];
    }
    acc[keyValue].push(item);

    return acc;
  }, {});
}
