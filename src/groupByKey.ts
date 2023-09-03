type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  return items.reduce((acc: GroupsMap<T>, item: T) => {
    const itemsGroup = item[key].toString();

    if (!acc[itemsGroup]) {
      acc[itemsGroup] = [];
    }

    acc[itemsGroup].push(item);

    return acc;
  }, {});
}
