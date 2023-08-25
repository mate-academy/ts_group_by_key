type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const groupedItems: GroupsMap<T> = {};

  items.forEach((item: T) => {
    const v: string = String(item[key]);

    if (groupedItems[String(v)] === undefined) {
      groupedItems[String(v)] = [];
    }
    groupedItems[String(v)].push(item);
  });

  return groupedItems;
}
