type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  return items.reduce((groupedItems: GroupsMap<T>, item: T) => {
    const keyValue = String(item[key]);

    if (!groupedItems[keyValue]) {
      groupedItems[keyValue] = [];
    }

    groupedItems[keyValue].push(item);

    return groupedItems;
  }, {} as GroupsMap<T>);
}
